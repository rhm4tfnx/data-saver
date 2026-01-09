import { useId } from "react";

const Input = (props) => {
  const id = useId();
  return (
    <>
      <label htmlFor="id">{id}</label>
      <input type="text" id={id} />
    </>
  );
};

export default function App() {
  return (
    <>
      <Input id="firstname" />
      <Input id="firstname" />
      <Input id="firstname" />
      <Input id="firstname" />
    </>
  );
}
