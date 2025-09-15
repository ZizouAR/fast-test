import { BiCog, BiPlus } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { MdSubscriptions, MdVideoSettings } from "react-icons/md";

export default function Bottombar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-900 flex items-center justify-between px-6 py-2 opacity-95">
      <div className="text-zinc-50">
        <HiHome size={22} />
      </div>
      <div className="text-zinc-50">
        <MdSubscriptions size={22} />
      </div>
      <div className="text-zinc-50 bg-zinc-800 w-8 h-8 flex items-center justify-center rounded-full">
        <BiPlus size={22} />
      </div>
      <div className="text-zinc-50">
        <MdVideoSettings size={22} />
      </div>
      <div className="text-zinc-50">
        <BiCog size={22} />
      </div>
    </div>
  );
}
