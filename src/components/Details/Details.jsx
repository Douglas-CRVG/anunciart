import Description from "../Description/Description";
import Title from "../Title/Title";
import { SCDetails } from "./style";

export default function Details({ video }) {
  return (
    <SCDetails>
      <Title title={video.name} />
      <Description description={video.description} />
    </SCDetails>
  );
}
