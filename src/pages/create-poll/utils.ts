import { ICreatePollData, IPollFormData, IPollItem } from '../../common/typings';

export const preparedPollBeforeSubmit = (pollData: IPollFormData): ICreatePollData => {
  const preparedPoll: any = { ...pollData };

  if (pollData.mainImage) {
    const mainImageFormData = new FormData();

    mainImageFormData.append(pollData.mainImage.name, pollData.mainImage);

    preparedPoll.mainImage = mainImageFormData;
  }

  preparedPoll.items = preparedPoll.items.map((item: IPollItem<File>) => {
    if (item.image) {
      const formData = new FormData();
      formData.append(item.image.name, item.image);

      return {
        ...item,
        image: formData,
      };
    }
    return item;
  });

  return preparedPoll;
};
