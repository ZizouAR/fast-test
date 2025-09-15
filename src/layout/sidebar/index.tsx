import clsx from "clsx";
import type { IconType } from "react-icons";
import { BiHistory, BiHome, BiMoviePlay, BiMusic } from "react-icons/bi";
import { FaRegLightbulb, FaRegNewspaper, FaVideoSlash } from "react-icons/fa";
import {
  MdLocalMovies,
  MdSportsBasketball,
  MdVideoSettings,
} from "react-icons/md";
import type { ObjectId } from "../../types/Global";
import { useEffect, type ReactNode } from "react";
import { Link, useOutletContext } from "react-router";
import { FiRewind } from "react-icons/fi";
import { TbNetwork } from "react-icons/tb";
import { BsController } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";

type LinkType = {
  id: ObjectId;
  title: string;
  Icon: IconType;
  active?: boolean;
};

type SidebarContentType = {
  id: ObjectId;
  TextContent?: ReactNode;
  links?: Array<LinkType>;
};

const SIDEBAR_CONTENT: Array<SidebarContentType> = [
  {
    id: 1,
    links: [
      {
        id: "1-1",
        title: "Home",
        Icon: BiHome,
        active: true,
      },
      {
        id: "1-2",
        title: "Shorts",
        Icon: FaVideoSlash,
        active: false,
      },
      {
        id: "1-3",
        title: "Subscriptions",
        Icon: BiMoviePlay,
        active: false,
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        id: "2-1",
        title: "You",
        Icon: MdVideoSettings,
        active: false,
      },
      {
        id: "2-2",
        title: "History",
        Icon: BiHistory,
        active: false,
      },
    ],
  },
  {
    id: 3,
    TextContent: (
      <p className="text-zinc-50">
        Sign in to like videos, comment, and subscribe.{" "}
        <Link to="/" className="text-blue-600">
          Sign in
        </Link>
      </p>
    ),
  },
  {
    id: 4,
    TextContent: <p className="text-zinc-50">Explore</p>,
    links: [
      {
        id: "4-1",
        title: "Trending",
        Icon: FiRewind,
        active: false,
      },
      {
        id: "4-2",
        title: "Music",
        Icon: BiMusic,
        active: false,
      },
      {
        id: "4-3",
        title: "Movies",
        Icon: MdLocalMovies,
        active: false,
      },
      {
        id: "4-4",
        title: "Movies",
        Icon: TbNetwork,
        active: false,
      },
      {
        id: "4-5",
        title: "Gaming",
        Icon: BsController,
        active: false,
      },
      {
        id: "4-6",
        title: "News",
        Icon: FaRegNewspaper,
        active: false,
      },
      {
        id: "4-7",
        title: "Sports",
        Icon: MdSportsBasketball,
        active: false,
      },
      {
        id: "4-8",
        title: "Learning",
        Icon: FaRegLightbulb,
        active: false,
      },
      {
        id: "4-9",
        title: "Fashion & Beauty",
        Icon: GiClothes,
        active: false,
      },
    ],
  },
];

export default function Sidebar() {
  const { openSidebar } = useOutletContext<{ openSidebar: boolean }>();

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSidebar]);
  
  return (
    <div
      className={clsx(
        // base styles
        "flex flex-col gap-10 mt-16 md:mt-20 pt-5 px-4 h-full md:h-[calc(100vh-5rem)] overflow-y-auto top-0 bg-zinc-900",
        // desktop always visible
        "fixed md:sticky md:basis-1/5 md:top-20",
        // mobile slide-in
        "fixed top-0 left-0 w-full z-10 md:relative md:translate-x-0 transform transition-transform duration-300 ease-in-out",
        openSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}
    >
      <div className="w-full">
        {SIDEBAR_CONTENT.map(({ links, TextContent, id }) => (
          <div key={id}>
            {TextContent ? <p>{TextContent}</p> : null}
            {links && links.length > 0 ? (
              <div className="flex flex-col gap-2">
                {links.map(({ id: linkId, title, Icon, active }) => (
                  <div
                    key={linkId}
                    className={clsx(
                      "w-full font-medium px-2 py-2 text-zinc-50 rounded-md flex gap-5 items-center cursor-pointer",
                      {
                        "bg-zinc-800": active,
                      }
                    )}
                  >
                    <Icon size={20} />
                    {title}
                  </div>
                ))}
              </div>
            ) : null}
            <hr className="bg-zinc-600 w-full h-[2px] my-6" />
          </div>
        ))}
      </div>
    </div>
  );
}
