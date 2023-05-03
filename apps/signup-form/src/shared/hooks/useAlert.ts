import React from 'react';
import { Alert } from '../types';

export type AlertState = {
  currentAlert?: Alert;
};

export const initialAlertState: AlertState = {};

export function useAlert() {
  const [state, setState] = React.useState(initialAlertState);

  const newAlert = (newAlert: Alert) => {
    setState({ currentAlert: newAlert });
  };

  const removeAlert = () => {
    setState({});
  };

  return { state, newAlert, removeAlert };
}
