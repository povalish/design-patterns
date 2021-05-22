import { BaseSubscription } from './BaseSubscription';
import { ProfessionalSubscription } from './ProfessionalSubscription';
import { CreativeSubscription } from './CreativeSubscription';
import { StudentSubscription } from './StudentSubscription';

export const main = () => {
  const baseSubscription = new BaseSubscription();

  // Extends base subscription to professional
  const forProfessionals = new ProfessionalSubscription(baseSubscription);

  // Extends base subscription to creatives
  const forCreatives = new CreativeSubscription(baseSubscription);

  // Extends base subscription to students
  const forStudents = new StudentSubscription(baseSubscription);


  // Extends base subscription to professional and creatives
  // base -> professional -> creatives
  const forProCreatives = new CreativeSubscription(forProfessionals);

  // Extends base subscription to creatives and students
  // base -> creatives -> students
  const forStudCreatives = new StudentSubscription(forCreatives);

  // Extends base subscription to professional, creatives and students
  // base -> professional -> creatives -> students
  const forProStudCreatives = new StudentSubscription(forProCreatives);
};
