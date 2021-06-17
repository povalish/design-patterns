/* eslint-disable no-console */

import { ApplicationConfig } from './Singleton/ApplicationConfig';

console.log('\n\n======================= \n\n');
const settings1 = ApplicationConfig.getInstance();
const settings2 = ApplicationConfig.getInstance();

console.log(settings1.version === settings2.version);
console.log('\n\n======================= \n\n');
