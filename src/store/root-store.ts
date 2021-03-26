import { ProfileStore } from './profile-store';

export class RootStore {
  constructor(readonly profileStore: ProfileStore = new ProfileStore()) {}
}
