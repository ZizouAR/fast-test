import { Outlet } from "react-router";
import Sidebar from ".";

export default function SidebarLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="basis-4/5 overflow-hidden mt-20">
        <Outlet />
      </div>
    </div>
  );
}
