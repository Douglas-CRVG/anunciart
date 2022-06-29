import { SCBox, SCLink } from "./style";

export default function Box({ data }) {
  return (
    <SCBox>
      {data.map((iten) => {
        let src;
        if (iten.thumbnail) {
          src = iten.thumbnail + "_320x180?r=pad";
        } else {
          src = "http://www.unirio.br/propg/jornadapg/imagens/em-breve/image";
        }
        return (
          <SCLink key={iten.id} to={`/player/${iten.link}`}>
            <figure>
              <img src={src} alt={iten.name} />
              <figcaption>{iten.name}</figcaption>
            </figure>
          </SCLink>
        );
      })}
    </SCBox>
  );
}
