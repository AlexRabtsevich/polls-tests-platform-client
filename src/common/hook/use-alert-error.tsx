import { useSnackbar } from 'notistack';
import { useMemo } from 'react';

export const useErrorAlert = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMemo(() => {
    return (message: string) => enqueueSnackbar(message, { variant: 'error' });
  }, [enqueueSnackbar]);
};
