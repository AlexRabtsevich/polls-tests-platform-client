import React, { ComponentType, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useErrorAlert } from '../common/hook';
import { IAlertHandlingQueryState } from '../common/typings';

export const withAlertHandling = <T extends {}>(Component: ComponentType<T>) => {
  return (props: T) => {
    const errorAlert = useErrorAlert();
    const location = useLocation<IAlertHandlingQueryState>();

    useEffect(() => {
      if (location.state.isShowErrorAlert && location.state.message) {
        errorAlert(location.state.message);
      }
    }, [errorAlert, location.state.isShowErrorAlert, location.state.message]);

    return <Component {...props} />;
  };
};
