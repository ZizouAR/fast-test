import { Link } from "react-router";
import logo from "/logo.png";

export default function Logo() {
  return (
    <Link to='/'>
      <img src={logo} width={120} height={10} />
    </Link>
  );
}
