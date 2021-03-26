import { createBrowserHistory } from 'history';
import { Routes } from '../../../routes';
import { FORBIDDEN } from 'http-status';

export class ErrorForbiddenService {
  handleForbidden(): void {
    const history = createBrowserHistory();

    history.push(Routes.ErrorPage, { status: FORBIDDEN });
  }
}
