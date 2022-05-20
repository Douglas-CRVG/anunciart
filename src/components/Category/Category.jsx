import Box from "../Box/Box";
import { SCCategory } from "./style";
export default function Category({ category }) {
  return (
    <SCCategory>
      <p>{category}</p>
      <Box />
    </SCCategory>
  );
}
