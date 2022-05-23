import { SCBox, SCLink } from "./style";

export default function Box() {
  return (
    <SCBox>
      <SCLink to="/player">
        <figure>
          <img
            src="https://t2.tudocdn.net/603659?w=1920&h=1080"
            alt="Uma imagem impressionante"
          />
          <figcaption>Legenda para a imagem impressionante</figcaption>
        </figure>
      </SCLink>
      <SCLink to="/player">
        <figure>
          <img
            src="https://t2.tudocdn.net/603659?w=1920&h=1080"
            alt="Uma imagem impressionante"
          />
          <figcaption>Lorem ipsum dolor sit amet, consectetur</figcaption>
        </figure>
      </SCLink>
      <SCLink to="/player">
        <figure>
          <img
            src="https://t2.tudocdn.net/603659?w=1920&h=1080"
            alt="Uma imagem impressionante"
          />
          <figcaption>Legenda para a imagem impressionanteoooo</figcaption>
        </figure>
      </SCLink>
    </SCBox>
  );
}
