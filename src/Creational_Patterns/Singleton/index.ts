/* eslint-disable no-console */
import { Analytics } from './Analytics';

export function main() {
  const onSubmit = () => {
    console.log('Click on submit button.');
    Analytics.instance.logEvent('Submit Event');
  };

  const onLogout = () => {
    console.log('Logging out..');
    Analytics.instance.logEvent('Logout.');
  };

  onSubmit();
  onLogout();
}
