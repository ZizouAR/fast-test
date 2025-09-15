import clsx from "clsx";
import { BiSearch } from "react-icons/bi";

export default function ProfileTabs() {
  return (
    <div>
      <div className="flex items-center gap-5">
        {TABS.map(({ active, title }) => (
          <div
            className={clsx("font-medium", {
              "text-zinc-50 border-b pb-2": active,
              "text-zinc-500  pb-2": !active,
            })}
          >
            {title}
          </div>
        ))}

        <BiSearch className="text-zinc-500" size={22} />
      </div>

      <hr className="border border-zinc-600" />
    </div>
  );
}

const TABS = [
  {
    title: "Home",
    active: true,
  },
  {
    title: "Vidéos",
    active: false,
  },
  {
    title: "Playlists",
    active: false,
  },
  {
    title: "Community",
    active: false,
  },
];