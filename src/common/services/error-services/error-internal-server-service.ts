import { createBrowserHistory } from 'history';
import { Routes } from '../../../routes';
import { INTERNAL_SERVER_ERROR } from 'http-status';

export class ErrorInternalServerService {
  handleInternalServer(): void {
    const history = createBrowserHistory();

    history.push(Routes.ErrorPage, { status: INTERNAL_SERVER_ERROR });
  }
}
