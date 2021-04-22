import React, { ChangeEvent, FC, useCallback, useMemo } from 'react';
import MaterialPagination, { PaginationProps } from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { getPaginationStyles } from './styles';

const DESKTOP_PAGE_SIBLING_COUNT = 1;
const MOBILE_PAGE_SIBLING_COUNT = 0;

interface IProps {
  onChange: (page: number) => void;
}

export const Pagination: FC<Pick<PaginationProps, 'count' | 'page'> & IProps> = (props) => {
  const { onChange, ...paginationProps } = props;
  const classes = getPaginationStyles();

  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('sm'));

  const siblingCount = useMemo(() => (isDesktopView ? DESKTOP_PAGE_SIBLING_COUNT : MOBILE_PAGE_SIBLING_COUNT), [isDesktopView]);

  const onPageChange = useCallback(
    (event: ChangeEvent<unknown>, page: number) => {
      onChange(page);
    },
    [onChange],
  );

  if (!props.count) {
    return null;
  }

  return <MaterialPagination className={classes.root} {...paginationProps} onChange={onPageChange} siblingCount={siblingCount} />;
};
