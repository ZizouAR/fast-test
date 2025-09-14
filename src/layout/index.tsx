import { Outlet } from "react-router";
import Navbar from "./navbar";
import { useState } from "react";
import ScrollToTop from "../components/scroll-to-top";
export default function AppLayout() {
  const [navbarPlayerMode, setNavbarPlayerMode] = useState(false);

  return (
    <div className="h-full min-h-screen dark:bg-zinc-900">
      <ScrollToTop />
      <Navbar {...{ navbarPlayerMode }} />
      <Outlet context={{ setNavbarPlayerMode }} />
    </div>
  );
}
