import { IPollAnswerListRequestData, IPollAnswerRequestData, PollAnswerFormData } from '../../common/typings';

export const preparedPollAnswerData = (formData: PollAnswerFormData, pollId: string): IPollAnswerRequestData => {
  const answers = Object.keys(formData).reduce<IPollAnswerListRequestData[]>((prevAnswerList, currentKey) => {
    prevAnswerList.push({ pollItemId: currentKey, pollAnswerUuid: formData[currentKey] });

    return prevAnswerList;
  }, []);

  return {
    answers,
    pollId,
  };
};
