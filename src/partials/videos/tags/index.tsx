import clsx from "clsx";
import { CgChevronRight } from "react-icons/cg";

const TAGS = [
  { title: "All", active: true },
  { title: "Music", active: false },
  { title: "Live", active: false },
  { title: "Gaming", active: false },
  { title: "News", active: false },
  { title: "Sports", active: false },
  { title: "Movies", active: false },
  { title: "Podcasts", active: false },
  { title: "Fashion", active: false },
  { title: "Technology", active: false },
  { title: "Learning", active: false },
  { title: "Comedy", active: false },
  { title: "Cooking", active: false },
  { title: "All", active: false },
  { title: "Music", active: false },
  { title: "Live", active: false },
  { title: "Gaming", active: false },
  { title: "News", active: false },
  { title: "Sports", active: false },
  { title: "Movies", active: false },
  { title: "Podcasts", active: false },
  { title: "Fashion", active: false },
  { title: "Technology", active: false },
  { title: "Learning", active: false },
  { title: "Comedy", active: false },
  { title: "Cooking", active: false },
];

export default function VideosTags() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 space-x-3 overflow-x-hidden w-[calc(100%-5rem)] pb-2">
        {TAGS.map(({ title, active }, index) => (
          <div
            key={index}
            className={clsx("px-4 py-2 rounded-sm font-medium ", {
              "bg-zinc-50 text-zinc-800": active,
              "bg-zinc-800 text-zinc-50 ": !active,
            })}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="cursor-pointer text-zinc-50">
        <CgChevronRight  size={26} />
      </div>
    </div>
  );
}
