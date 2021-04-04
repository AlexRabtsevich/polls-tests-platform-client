import React, { FC } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { DropZoneImage } from './drop-zone-image';

interface IProps {
  fieldImageName: string;
}

export const FormImage: FC<IProps> = ({ fieldImageName }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldImageName}
      control={control}
      render={({ onChange }) => (
        <DropZoneImage fieldImageName={fieldImageName} onChange={(e) => e.target.files && onChange(e.target.files[0])} />
      )}
    />
  );
};
