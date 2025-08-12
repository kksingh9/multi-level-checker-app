import Heading from "../heading";
import Input from "../ui/Input";
import Label from "../ui/label";
import TextArea from "../ui/textArea";

const Step1 = ({currentStep}) => {
  return (
    <section>
      <Heading currentStep={currentStep} />

      <div className="mt-6 space-y-6 max-w-xl">
        <div>
          <Label text={"Name"} className={""} />
          <Input
            type={"text"}
            placeholder={"Title comes here"}
            className={""}
          />
        </div>

        <div>
          <Label text={"Description"} className={""} />
          <TextArea
            rows={4}
            placeholder={"Description text comes here"}
            className={""}
          />
        </div>
      </div>
    </section>
  );
};

export default Step1;
