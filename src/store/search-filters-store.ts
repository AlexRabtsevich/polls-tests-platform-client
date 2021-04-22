import { Moment } from 'moment';
import { makeAutoObservable } from 'mobx';
import { PollAndTestType } from '../common/typings';
import { ChangeEvent } from 'react';

export class SearchFiltersStore {
  fromDate: Moment | null = null;
  toDate: Moment | null = null;
  types: PollAndTestType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setFromDate = (fromDate: Moment | null): void => {
    this.fromDate = fromDate;
  };

  setToDate = (toDate: Moment | null): void => {
    this.toDate = toDate;
  };

  setType = (event: ChangeEvent<HTMLInputElement>): void => {
    const clickedType = event.target.value as PollAndTestType;

    if (this.types.includes(clickedType)) {
      this.types = this.types.filter((type) => type !== clickedType);
    } else {
      this.types.push(clickedType);
    }
  };

  getIsCheckedType = (type: PollAndTestType): boolean => {
    return this.types.includes(type);
  };

  clearFilters = (): void => {
    this.types = [];
    this.fromDate = null;
    this.toDate = null;
  };
}
