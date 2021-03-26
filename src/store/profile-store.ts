import { IProfile } from '../common/typings';

import { makeAutoObservable } from 'mobx';

const initialProfile = {
  _id: '',
  lastName: '',
  firstName: '',
  email: '',
};

export class ProfileStore {
  isAuthorized = false;
  profile: IProfile = initialProfile;

  constructor() {
    makeAutoObservable(this);
  }

  setProfile(profile: IProfile): void {
    this.profile = profile;
    this.isAuthorized = true;
  }

  getProfile(): IProfile {
    return this.profile;
  }

  clearProfile(): void {
    this.profile = initialProfile;
    this.isAuthorized = false;
  }
}
