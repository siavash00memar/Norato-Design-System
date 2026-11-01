export type NoratoFileLike = Pick<File, 'name' | 'size' | 'type'>
export type NoratoFileRejectionReason = 'type' | 'size' | 'count'
export type NoratoFileRejection<TFile extends NoratoFileLike = File> = {
  file: TFile
  reason: NoratoFileRejectionReason
}

export type NoratoFileValidationOptions = {
  accept: string
  maxSize: number
  maxFiles: number
  multiple: boolean
  currentCount: number
}

function matchesAcceptedType(file: NoratoFileLike, accept: string): boolean {
  const acceptedTypes = accept.split(',').map(value => value.trim().toLowerCase()).filter(Boolean)
  if (!acceptedTypes.length) return true

  const fileName = file.name.toLowerCase()
  const mimeType = file.type.toLowerCase()
  return acceptedTypes.some(type => {
    if (type.startsWith('.')) return fileName.endsWith(type)
    if (type.endsWith('/*')) return mimeType.startsWith(type.slice(0, -1))
    return mimeType === type
  })
}

export function validateNoratoFiles<TFile extends NoratoFileLike>(
  files: readonly TFile[],
  options: NoratoFileValidationOptions,
): { accepted: TFile[]; rejected: NoratoFileRejection<TFile>[] } {
  const accepted: TFile[] = []
  const rejected: NoratoFileRejection<TFile>[] = []
  const safeMaxSize = Number.isFinite(options.maxSize) ? Math.max(0, options.maxSize) : 0
  const safeMaxFiles = Number.isFinite(options.maxFiles) ? Math.max(0, Math.floor(options.maxFiles)) : 0
  const safeCurrentCount = Number.isFinite(options.currentCount) ? Math.max(0, Math.floor(options.currentCount)) : 0
  const limit = options.multiple ? Math.max(0, safeMaxFiles - safeCurrentCount) : 1

  for (const file of files) {
    const reason: NoratoFileRejectionReason | undefined = !matchesAcceptedType(file, options.accept)
      ? 'type'
      : file.size > safeMaxSize
        ? 'size'
        : accepted.length >= limit
          ? 'count'
          : undefined
    if (reason) rejected.push({ file, reason })
    else accepted.push(file)
  }

  return { accepted, rejected }
}
