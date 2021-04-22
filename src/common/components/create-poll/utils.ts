import { ICreatePollRequestData, IFormPoll, IPollItem, PollAndTestType } from '../../typings';

const toBase64 = (file: File): Promise<any> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const getItemsWithImageBase64 = async (items: IPollItem<File>[]) => {
  return await Promise.all(
    items.map(async (item: IPollItem<File>) => {
      if (item.image) {
        const image = await toBase64(item.image);

        return {
          ...item,
          image,
        };
      }

      return item;
    }),
  );
};

interface IPreparedPollProps {
  formData: IFormPoll;
  feedback: string;
  hashtagList: string[];
  type: PollAndTestType;
}

export const preparedPollBeforeSubmit = async ({
  feedback,
  hashtagList,
  formData,
  type,
}: IPreparedPollProps): Promise<ICreatePollRequestData> => {
  return {
    description: formData.description,
    title: formData.title,
    mainImage: formData.mainImage ? await toBase64(formData.mainImage) : undefined,
    items: await getItemsWithImageBase64(formData.items),
    hashtagList: hashtagList.length ? hashtagList : undefined,
    feedback,
    type,
  };
};
