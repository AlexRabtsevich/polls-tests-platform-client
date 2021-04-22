import { PollAndTestType } from './common';
import { IProfile } from './profile';

export interface IFormPollAnswer {
  variant: string;
  uuid: string;
}

export interface IPollItem<T> {
  image: T | undefined;
  title: string;
  answers: IFormPollAnswer[];
  rightAnswer?: string;
}

export interface IFormPoll {
  description: string;
  items: IPollItem<File>[];
  mainImage: File | undefined;
  title: string;
}

export interface ICreatePollRequestData {
  description: string;
  items: IPollItem<string>[];
  mainImage: string | undefined;
  title: string;
  feedback: string;
  type: PollAndTestType;
  hashtagList: string[] | undefined;
}

export interface IPollAnswerItem {
  image: string | null;
  title: string;
  answers: IFormPollAnswer[];
  rightAnswer?: string;
  _id: string;
}

export interface IPollAnswer {
  _id: string;
  creationDate: string;
  creator: IProfile;
  items: IPollAnswerItem[];
  mainImage: string | null;
  title: string;
  feedback: string;
  type: PollAndTestType;
  hashtagList: string[] | undefined;
  description: string;
}

export type PollAnswerFormData = Record<string, string>;

export interface IPollAnswerListRequestData {
  pollItemId: string;
  pollAnswerUuid: string;
}

export interface IPollAnswerRequestData {
  answers: IPollAnswerListRequestData[];
  pollId: string;
}

export interface IPollResult {
  score: number;
  countQuestions: number;
}

export interface IPollAnswerResponse extends IPollAnswerRequestData {
  _id: string;
  creationDate: string;
  pollResult: IPollResult;
  poll: {
    feedback: string | null;
    type: PollAndTestType;
    _id: string;
  };
}
