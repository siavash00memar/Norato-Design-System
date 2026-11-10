type NativeFileTransfer = {
  items: { add(file: File): void }
  files: FileList
}

type NativeFileTransferFactory = () => NativeFileTransfer | undefined

function createBrowserTransfer(): NativeFileTransfer | undefined {
  if (typeof DataTransfer === 'undefined') return undefined
  return new DataTransfer()
}

export function syncNativeFileList(
  input: Pick<HTMLInputElement, 'files'> | undefined,
  files: readonly (File | undefined)[],
  createTransfer: NativeFileTransferFactory = createBrowserTransfer,
): boolean {
  if (!input) return false
  const transfer = createTransfer()
  if (!transfer) return false

  files.forEach(file => { if (file) transfer.items.add(file) })
  input.files = transfer.files
  return true
}
