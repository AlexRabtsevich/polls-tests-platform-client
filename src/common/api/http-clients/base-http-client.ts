import axios, { AxiosInstance } from 'axios';

import { ErrorHandlingService } from '../../services';

export abstract class BaseHttpClient {
  protected readonly httpClient: AxiosInstance;

  protected constructor(protected readonly errorHandlingService: ErrorHandlingService = new ErrorHandlingService()) {
    this.httpClient = axios.create({ baseURL: process.env.REACT_APP_BASE_API_URL });
    this.setResponseInterceptor();
  }

  private setResponseInterceptor() {
    this.httpClient.interceptors.response.use(
      (response) => {
        return Promise.resolve(response);
      },
      (error) => this.errorHandlingService.handleError(error),
    );
  }
}
