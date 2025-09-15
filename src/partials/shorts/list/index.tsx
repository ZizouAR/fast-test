import { CgChevronDown, CgClose } from "react-icons/cg";
import ShortCard from "../card";

type Props = {
  shortsToShow?: number;
  showMore?: boolean;
};

export default function ShortsList({
  shortsToShow = 4,
  showMore = true,
}: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <img src="/shorts/shorts-icon.png" />
          <h2 className="font-bold text-xl text-zinc-50">Shorts</h2>
        </div>

        <CgClose color="white" size={22} />
      </div>
      <div className="flex gap-2 flex-col md:flex-row lg:flex-row relative">
        {SHORTS.slice(0, shortsToShow).map((short) => (
          <ShortCard {...short} key={short.id} />
        ))}
      </div>
      <div className="relative">
        <hr className="bg-zinc-600 w-full h-[2px] my-6" />
        {showMore ? (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-index-1 bg-zinc-900 px-3 rounded-3xl border border-zinc-600 py-1 flex items-center gap-3">
            <span className="text-zinc-50">Show More</span>
            <span className="text-zinc-600">
              <CgChevronDown size={20} />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

const SHORTS = [
  {
    id: 1,
    title: "Funny Cat Compilation",
    nb_views: "1.2M",
    short_url: "/shorts/riles.png",
  },
  {
    id: 2,
    title: "Quick Cooking Hack",
    nb_views: "850K",
    short_url: "/shorts/mb.png",
  },
  {
    id: 3,
    title: "Amazing Trick Shots",
    nb_views: "2.3M",
    short_url: "/shorts/balloon.png",
  },
  {
    id: 4,
    title: "DIY Room Makeover",
    nb_views: "950K",
    short_url: "/shorts/karl.png",
  },
];
