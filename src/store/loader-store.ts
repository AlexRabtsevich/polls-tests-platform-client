import { makeAutoObservable } from 'mobx';

export class LoaderStore {
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  turnOnLoading = (): void => {
    this.isLoading = true;
  };

  turnOffLoading = (): void => {
    this.isLoading = false;
  };
}
