import Box from "../Box/Box";
import { SCCategory } from "./style";
export default function Category({ category, data }) {
  return (
    <SCCategory>
      <p>{category}</p>
      <Box data={data} />
    </SCCategory>
  );
}
