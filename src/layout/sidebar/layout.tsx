import { Outlet } from "react-router";
import Sidebar from ".";

export default function SidebarLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="overflow-hidden mt-20 md:basis-4/5  lg:basis-4/5">
        <Outlet />
      </div>
    </div>
  );
}
