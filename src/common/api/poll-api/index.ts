import { SecureHttpClient } from '../http-clients';
import { ICreatePollData } from '../../typings';

export class PollApi extends SecureHttpClient {
  async createPoll(pollData: ICreatePollData): Promise<void> {
    const REQUEST_PATH = 'polls';

    await this.httpClient.post(REQUEST_PATH, pollData);
  }
}
