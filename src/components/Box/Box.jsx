import { SCBox, SCLink } from "./style";

export default function Box({ data }) {
  return (
    <SCBox>
      {data.map((iten) => (
        <SCLink key={iten.id} to={`/player/${iten.link}`}>
          <figure>
            <img
              src="https://t2.tudocdn.net/603659?w=1920&h=1080"
              alt={iten.name}
            />
            <figcaption>{iten.name}</figcaption>
          </figure>
        </SCLink>
      ))}
    </SCBox>
  );
}
