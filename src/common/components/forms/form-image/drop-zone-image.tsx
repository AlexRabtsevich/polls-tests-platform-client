import React, { ChangeEvent, FC, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { BoxImage } from './box-image';
import { getDropZoneStyles } from './style';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Span } from '../../typography/span';

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fieldImageName: string;
}

export const DropZoneImage: FC<IProps> = ({ onChange, fieldImageName }) => {
  const { setValue, watch } = useFormContext();
  const file = watch(fieldImageName);
  const classes = getDropZoneStyles();

  const onDrop = useCallback(
    (acceptedFiles) => {
      setValue(
        fieldImageName,
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        }),
      );
    },
    [fieldImageName, setValue],
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div {...getRootProps({ className: classes.root })}>
      <input {...getInputProps({ onChange })} />
      {!file && (
        <div className={classes.text}>
          <AddCircleOutlineOutlinedIcon />
          <Span>Drag drop some files here, or click to select files</Span>
        </div>
      )}
      <BoxImage fieldImageName={fieldImageName} />
    </div>
  );
};
