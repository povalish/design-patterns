import { useEffect, useState } from './mock';
import { FormSnapshot } from './FormSnapshot';


export const ComplexForm = (): string => {
  const [step1Field1, setStep1Field1] = useState('');
  const [step1Field2, setStep1Field2] = useState('');
  const [step1Field3, setStep1Field3] = useState('');
  const [step1Field4, setStep1Field4] = useState('');

  const [step2Field1, setStep2Field1] = useState('');
  const [step2Field2, setStep2Field2] = useState('');
  const [step2Field3, setStep2Field3] = useState('');
  const [step2Field4, setStep2Field4] = useState('');


  useEffect(() => {
    const savedStep1 = FormSnapshot.instance.restoreStep(1);
    const savedStep2 = FormSnapshot.instance.restoreStep(2);

    if (savedStep1) {
      setStep1Field1(savedStep1.field1);
      setStep1Field2(savedStep1.field2);
      setStep1Field3(savedStep1.field3);
      setStep1Field4(savedStep1.field4);
    }

    if (savedStep2) {
      setStep2Field1(savedStep2.field1);
      setStep2Field2(savedStep2.field2);
      setStep2Field3(savedStep2.field3);
      setStep2Field4(savedStep2.field4);
    }
  }, []);


  const saveFirstStep = () => {
    // some first step validations
    FormSnapshot.instance.saveStep(1, {
      field1: step1Field1,
      field2: step1Field2,
      field3: step1Field3,
      field4: step1Field4,
    });
  };

  const saveSecondStep = () => {
    // some 2nd step validations
    FormSnapshot.instance.saveStep(2, {
      field1: step2Field1,
      field2: step2Field2,
      field3: step2Field3,
      field4: step2Field4,
    });
  };



  return '<form></form>';
};
