import React, { FC, useCallback, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import { Grid } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { useFieldArray, useFormContext, Controller } from 'react-hook-form';

import { FormItemFooter } from './form-item-footer';
import { FormItemAnswer } from './form-item-answer';
import { getFormItemStyles } from './style';
import { useFocusElement } from '../../../hook';
import { TextField } from '../../inputs';
import { BoxImage } from '../form-image/box-image';

interface IProps {
  removeItem: () => void;
  itemIndex: number;
}

export const FormItem: FC<IProps> = ({ removeItem, itemIndex }) => {
  const { control, setValue } = useFormContext();
  const { isFocusedElement, onBlurElement, onFocusElement } = useFocusElement();
  const classes = getFormItemStyles({ isFocusedItem: isFocusedElement });

  const { fields, append, remove } = useFieldArray({
    control,
    name: `items[${itemIndex}].answers`,
  });

  useEffect(() => {
    append({
      'items[0].answers': [{ variant: '' }],
    });
  }, []);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setValue(
        `items[${itemIndex}].image`,
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        }),
      );
    },
    [itemIndex, setValue],
  );

  const { getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const appendAnswer = useCallback(() => append({ variant: '' }), [append]);

  return (
    <Card className={classes.root} onBlur={onBlurElement} onFocus={onFocusElement}>
      <Grid container direction='column'>
        <Grid item>
          <TextField name={`items[${itemIndex}].title`} variant='standard' defaultValue='New title' />
        </Grid>
        <Grid item>
          <BoxImage fieldImageName={`items[${itemIndex}].image`} />
        </Grid>
        <Grid item>
          {fields.map((item, index) => (
            <FormItemAnswer
              isCanRemove={fields.length > 1 && isFocusedElement}
              key={item.id}
              removeAnswer={() => remove(index)}
              fieldName={`items[${itemIndex}].answers[${index}].variant`}
            />
          ))}
        </Grid>
        <Grid item>
          <Controller
            control={control}
            name={`items[${itemIndex}].image`}
            render={({ onChange }) => <input {...getInputProps({ onChange: (e) => e.target.files && onChange(e.target.files[0]) })} />}
          />
          <FormItemFooter removeItem={removeItem} appendAnswer={appendAnswer} addImage={open} />
        </Grid>
      </Grid>
    </Card>
  );
};
