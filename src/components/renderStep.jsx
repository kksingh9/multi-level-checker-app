import Step1 from "../components/step1/step1";
import Step2 from "../components/step2/step2";
import Step3 from "../components/step3/step3";

export const renderStep = (currentStep) => {
  switch (currentStep) {
    case 1:
      return <Step1 currentStep={currentStep} />;
    case 2:
      return <Step2 currentStep={currentStep} />;
    case 3:
      return <Step3 currentStep={currentStep} />;
    default:
      return <Step1 currentStep={currentStep} />;
  }
};
