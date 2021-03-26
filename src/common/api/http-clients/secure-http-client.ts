import { BaseHttpClient } from './base-http-client';
import { withAuthorizationHeader } from './request';
import { SecureAuthorizationService } from '../../services/authorization-service';

export class SecureHttpClient extends BaseHttpClient {
  constructor(protected readonly secureAuthorizationService: SecureAuthorizationService) {
    super();
    this.setSecureInterceptor();
  }

  private setSecureInterceptor(): void {
    this.httpClient.interceptors.request.use((config) =>
      withAuthorizationHeader(this.secureAuthorizationService.getAccessToken.bind(this.secureAuthorizationService), config),
    );
  }
}
