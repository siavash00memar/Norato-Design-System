export interface FeedbackContract {
  loading: 'determinate' | 'indeterminate' | 'local';
  empty: { meaning: string; nextAction?: string };
  error: { message: string; recovery: string };
  success: { importance: 'inline' | 'transient' | 'persistent' };
}
