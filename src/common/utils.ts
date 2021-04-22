import { PollAndTestType } from './typings';

export const isTestType = (type: PollAndTestType) => {
  return type === PollAndTestType.Test;
};

export const isPollType = (type: PollAndTestType) => {
  return type === PollAndTestType.Poll;
};
