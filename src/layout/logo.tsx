import { Link } from "react-router";
import logo from "/logo.png";

export default function Logo() {
  return (
    <Link to='/'>
      <img src={logo} className="w-24 md:w-32"  />
    </Link>
  );
}
