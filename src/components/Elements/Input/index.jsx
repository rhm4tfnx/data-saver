import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { id, text } = props;
  return (
    <div className="space-y-1 relative">
      <Label id={id}>{text}</Label>
      <Input {...props} />
    </div>
  );
};

export default InputForm;
