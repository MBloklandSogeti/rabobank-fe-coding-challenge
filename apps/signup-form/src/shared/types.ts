export type AlertType = 'primary' | 'danger' | 'success' | 'warning';

export type Alert = {
  type: AlertType;
  title: string;
  message: string;
};
