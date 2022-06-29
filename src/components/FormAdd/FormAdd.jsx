import useBlock from "../../hooks/useBlock";
import { SCButton, SCForm } from "../Form/style";
import Input from "../Form/Input/Input";
import InputFile from "./InputFile/InputFile";
export default function FormAdd({ inputs, button, func, data, setData }) {
  const { block } = useBlock();
  return (
    <SCForm onSubmit={func} method="post" enctype="multipart/form-data">
      {inputs.map((input, index) => {
        if (input.type === "text") {
          return <Input key={index} {...input} data={data} setData={setData} />;
        } else {
          return (
            <InputFile key={index} {...input} data={data} setData={setData} />
          );
        }
      })}
      <SCButton block={block}>{button}</SCButton>
    </SCForm>
  );
}
