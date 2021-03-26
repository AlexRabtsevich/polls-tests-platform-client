export interface IErrorMessage {
  constraints: Record<string, string>;
  property: string;
}

export interface IErrorData {
  error: string;
  status: number;
  message: IErrorMessage[];
}
