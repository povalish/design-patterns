type StepFields = {
  field1: string;
  field2: string;
  field3: string;
  field4: string;
}


export class FormSnapshot {
  private step1Fields?: StepFields;
  private step2Fields?: StepFields;
  private step3Fields?: StepFields;

  public static instance = new FormSnapshot();

  // eslint-disable-next-line no-useless-constructor,no-empty-function
  private constructor() {
  }


  public saveStep(step: number, fields: StepFields) {
    // maybe save this fields in localStorage
    if (step === 1) {
      this.step1Fields = fields;
    }
    if (step === 2) {
      this.step2Fields = fields;
    }
    if (step === 3) {
      this.step3Fields = fields;
    }
  }

  public restoreStep(step: number): StepFields | undefined {
    // getting fields from localStorage
    if (step === 1) {
      return this.step1Fields;
    }
    if (step === 2) {
      return this.step1Fields;
    }
    if (step === 3) {
      return this.step1Fields;
    }
    return undefined;
  }
}
