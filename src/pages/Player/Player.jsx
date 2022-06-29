import Header from "../../components/Header/Header";
import { SCMain } from "../Home/style";
import { SCVideo } from "./style";
import Details from "../../components/Details/Details";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findByIdVideo } from "../../services/api";
import useAuth from "../../hooks/useToken";

export default function Players() {
  const [video, setVideo] = useState();
  const { token } = useAuth();
  const { videoId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    findByIdVideo(token, videoId)
      .then((response) => {
        setVideo(response.data);
      })
      .catch((error) => {
        alert("Tente novamente mais tarde");
        navigate("/home");
      });
  }, []);
  return (
    <>
      <Header />
      {video && (
        <SCMain>
          <SCVideo
            src={`https://player.vimeo.com/video/${video.link}?quality=720p`}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
          <Details video={video} />
        </SCMain>
      )}
    </>
  );
}
