import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import { SCMain } from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <SCMain>
        <Category category="Novos" />
        <Category category="Populares" />
        <Category category="Top" />
        <Category category="Todos" />
      </SCMain>
    </>
  );
}
