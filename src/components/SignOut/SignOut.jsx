import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useToken";
import { SCSignOut } from "./style";

export default function SignOut() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  function handleSignOut() {
    navigate("/", { replace: true });
    logOut();
  }
  return (
    <SCSignOut onClick={handleSignOut}>
      <IoIosLogOut size="2.25em" />
    </SCSignOut>
  );
}
