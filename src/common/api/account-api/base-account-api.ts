import { BaseAuthorizationService } from '../../services/authorization-service';
import { BaseHttpClient } from '../http-clients';
import { IAuthorizationPayload, ICreateAccount, ILogin, IProfile } from '../../typings';
import { getData } from '../http-clients/response';

export class BaseAccountApi extends BaseHttpClient {
  constructor(protected readonly baseAuthorizationService: BaseAuthorizationService = new BaseAuthorizationService()) {
    super();
  }

  public async login(loginData: ILogin): Promise<void> {
    const REQUEST_PATH = 'authentication/login';
    const response = await this.httpClient.post<IAuthorizationPayload>(REQUEST_PATH, loginData);

    this.baseAuthorizationService.authorize(response.data);
  }

  public createAccount(registrationData: ICreateAccount): Promise<IProfile> {
    const REQUEST_PATH = 'users';
    const response = this.httpClient.post<IProfile>(REQUEST_PATH, registrationData);

    return getData(response);
  }
}
