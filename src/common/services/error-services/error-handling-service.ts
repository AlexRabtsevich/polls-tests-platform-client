import { FORBIDDEN, UNAUTHORIZED, BAD_REQUEST } from 'http-status';

import { ErrorUnauthorizedService } from './error-unauthorized-service';
import { ErrorForbiddenService } from './error-forbidden-service';
import { ErrorInternalServerService } from './error-internal-server-service';

export class ErrorHandlingService {
  handleError(error: any): Promise<any> {
    if (error && error.response) {
      const code = error.response.status;

      switch (code) {
        case BAD_REQUEST: {
          return Promise.reject(error.response.data);
        }
        case UNAUTHORIZED: {
          const errorUnauthorizedService = new ErrorUnauthorizedService();
          errorUnauthorizedService.handleUnauthorized();

          break;
        }
        case FORBIDDEN: {
          const errorUnauthorizedService = new ErrorForbiddenService();
          errorUnauthorizedService.handleForbidden();

          break;
        }
        default: {
          const errorUnauthorizedService = new ErrorInternalServerService();
          errorUnauthorizedService.handleInternalServer();

          break;
        }
      }
    }

    return Promise.reject(error);
  }
}
