import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormAdd from "../../components/FormAdd/FormAdd";
import Header from "../../components/Header/Header";
import TitleForm from "../../components/TitleForm/TitleForm";
import useBlock from "../../hooks/useBlock";
import bodyAddSchema from "../../schemas/bodyAddSchema";
import { create } from "../../services/api";
import { add } from "../../utils";
import { SCMain } from "./style";
import useAuth from "../../hooks/useToken";

export default function Add() {
  const [bodyAdd, setBodyAdd] = useState({
    name: "",
    description: "",
  });
  const { setBlock } = useBlock();
  const { token } = useAuth();
  const redirectSignIn = useNavigate();

  async function handleAdd(e) {
    e.preventDefault();
    console.log(bodyAdd);
    setBlock(true);
    const validate = await bodyAddSchema.isValid(bodyAdd);
    if (!validate) {
      alert("Preencha corretamente todos os dados para adicionar!");
      setBlock(false);
      return;
    }

    const body = new FormData();
    body.set("name", bodyAdd.name);
    body.set("description", bodyAdd.description);
    body.set("video", bodyAdd.video, bodyAdd.video.name);

    create(body, token)
      .then((response) => {
        setBlock(false);
        redirectSignIn("/home", { replace: true });
      })
      .catch((err) => {
        setBlock(false);
        console.log(err);
        alert("Um erro ocorreu, tente novamente");
      });
  }

  return (
    <>
      <Header />
      <SCMain>
        <TitleForm title="Adicionar vídeo" />
        <FormAdd
          inputs={add}
          button="Enviar"
          func={handleAdd}
          data={bodyAdd}
          setData={setBodyAdd}
        />
      </SCMain>
    </>
  );
}
