export interface IPollAnswer {
  variant: string;
}

export interface IPollItem<T> {
  image: T | undefined;
  title: string;
  answers: IPollAnswer[];
}

export interface IPollFormData {
  description: string;
  items: IPollItem<File>[];
  mainImage: File | undefined;
  title: string;
}

export interface ICreatePollData {
  description: string;
  items: IPollItem<FormData>[];
  mainImage: FormData | undefined;
  title: string;
}
