import { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import { SCMain } from "./style";
import { findAll } from "../../services/api";

export default function Home() {
  const [newVideos, setNewVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    findAll().then((response) => {
      setNewVideos(response.data.findNew);
      setAllVideos(response.data.findAll);
    });
  }, []);
  return (
    <>
      <Header />
      <SCMain>
        <Category data={newVideos} category="Novos" />
        {/*<Category category="Populares" />
        <Category category="Top" />*/}
        <Category data={allVideos} category="Todos" />
      </SCMain>
    </>
  );
}
