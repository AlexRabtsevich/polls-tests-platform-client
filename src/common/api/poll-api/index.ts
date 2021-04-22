import { SecureHttpClient } from '../http-clients';
import {
  ICreatePollRequestData,
  IPollAnswer,
  IPollAnswerListRequestData,
  IPollAnswerRequestData,
  IPollAnswerResponse,
} from '../../typings';
import { getData } from '../http-clients/response';

export class PollApi extends SecureHttpClient {
  protected REQUEST_PATH = 'polls';

  async createPoll(pollData: ICreatePollRequestData): Promise<void> {
    await this.httpClient.post(this.REQUEST_PATH, pollData);
  }

  async getPoll(id: string): Promise<IPollAnswer> {
    return getData(this.httpClient.get(`${this.REQUEST_PATH}/${id}`));
  }

  async createPollAnswer(requestData: IPollAnswerRequestData): Promise<IPollAnswerResponse> {
    const REQUEST_PATH = 'answers';

    return getData(this.httpClient.post(REQUEST_PATH, requestData));
  }
}
