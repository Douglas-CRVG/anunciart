import { useContext } from "react";
import TokenContext from "../contexts/tokenContext";

export default function useAuth() {
  return useContext(TokenContext);
}
