import Header from "../../components/Header/Header";
import { SCMain } from "../Home/style";
import { SCVideo } from "./style";
import Details from "../../components/Details/Details";
import { useEffect } from "react";

export default function Players() {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <SCMain>
        <SCVideo
          src="https://player.vimeo.com/video/712762714?quality=720p"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
        <Details />
      </SCMain>
    </>
  );
}
