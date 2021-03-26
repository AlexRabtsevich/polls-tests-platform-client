import { ErrorOption, FieldName, FieldValues } from 'react-hook-form';

import { IErrorData } from '../typings';

export const useHandleFormSubmit = <T, R>(
  onSubmit: (data: T) => Promise<R>,
  setError: (name: FieldName<FieldValues>, error: ErrorOption) => void,
) => {
  return async (data: T) => {
    try {
      await onSubmit(data);
    } catch (error) {
      if (error.message) {
        const { message } = error as IErrorData;

        message.forEach((errorMessage) => {
          const { constraints, property } = errorMessage;
          const [type, message] = Object.entries(constraints)[0];

          setError(property, {
            type,
            message,
          });
        });
      }
    }
  };
};
