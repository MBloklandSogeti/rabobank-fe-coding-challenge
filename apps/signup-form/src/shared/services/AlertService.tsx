import React from 'react';
import { initialAlertState, useAlert } from '../hooks';

export const AlertContext = React.createContext<ReturnType<typeof useAlert>>({
  state: initialAlertState,
  newAlert: () => {
    return;
  },
  removeAlert: () => {
    return;
  },
});

export function AlertService(props: { children: React.ReactNode }) {
  const alert = useAlert();

  return (
    <AlertContext.Provider value={alert}>
      {props.children}
    </AlertContext.Provider>
  );
}

export function useAlertService() {
  return React.useContext(AlertContext);
}
