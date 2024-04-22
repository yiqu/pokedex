export interface FormActionState<T> {
  status: string;
  message: string;
  payload: T | null;
}

export interface FormActionDelete {
  status: string;
  message: string;
}