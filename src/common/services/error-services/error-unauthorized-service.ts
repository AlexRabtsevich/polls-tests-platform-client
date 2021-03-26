import { createBrowserHistory } from 'history';

import { publicRouteList, Routes } from '../../../routes';
import { BaseAuthorizationService } from '../authorization-service';

export class ErrorUnauthorizedService {
  constructor(protected readonly baseAuthorizationService: BaseAuthorizationService = new BaseAuthorizationService()) {}

  handleUnauthorized(): void {
    const history = createBrowserHistory();
    this.baseAuthorizationService.unauthorize();

    if (!publicRouteList.includes(history.location.pathname as Routes)) {
      history.push(Routes.Login, { isShowInfoAlert: true, message: 'please login to proceed' });
    }
  }
}
