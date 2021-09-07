import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';

export const PNotifyEmptyInput = () => alert({
  title: 'Alert!',
  text: 'Please enter something!',
  delay: 2000
});

export const PNotifyError = () => error({
  title: 'Error!',
  text: 'This query does not exist!',
  delay: 3000
});