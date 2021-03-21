import React, { FC } from 'react';

import Typography, { TypographyProps } from '@material-ui/core/Typography';

export const Span: FC<TypographyProps> = (props) => <Typography color='textPrimary' variant='subtitle2' {...props} />;
