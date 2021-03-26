export interface IErrorPageQueryState {
  status?: number;
}

export interface IAlertHandlingQueryState {
  isShowErrorAlert?: boolean;
  isShowInfoAlert?: boolean;
  message?: string;
}
