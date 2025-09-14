import { useOutletContext } from "react-router";
import VideoPlayerPage from "../../../partials/videos/show/player";
import { useEffect } from "react";
import Suggestions from "../../../partials/videos/show/suggestions";
import Avatar from "../../../components/avatar";
import { BiDotsVertical } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

export default function VideoShowPage() {
  const { setNavbarPlayerMode } = useOutletContext<{
    setNavbarPlayerMode: (arg: boolean) => void;
  }>();

  useEffect(() => {
    setNavbarPlayerMode(true);
    return () => setNavbarPlayerMode(false);
  }, []);

  return (
    <div className="px-24 flex gap-10 py-20">
      {/* VIDEO */}
      <div className="basis-2/3 flex flex-col gap-10">
        {/* SCREEN */}
        <VideoPlayerPage />

        {/* VIDEO INFOS */}
        <h1 className="text-white text-2xl">
          Top 10 JavaScript Tips You Should Know
        </h1>

        <div className="flex justify-between">
          <div className="flex gap-5 items-center">
            <Avatar />
            <div>
              <p className="text-zinc-50 text-base">SQUEEZIE</p>
              <span className="text-zinc-500 text-sm">25.4 k subscribers</span>
            </div>

            <div className="bg-zinc-50 text-zinc-800 px-4 py-2 rounded-3xl">
              Subscribe
            </div>
          </div>

          <div className="flex gap-5">
            <div className="bg-zinc-800 text-zinc-50 rounded-3xl flex items-center px-3">
              24.4 K{" "}
            </div>
            <div className="bg-zinc-800 text-zinc-50 rounded-3xl flex items-center px-3">
              Share
            </div>
            <div className="bg-zinc-800 text-zinc-50 rounded-3xl flex items-center px-3">
              Download
            </div>
            <div className="bg-zinc-800 text-zinc-50 rounded-3xl flex items-center px-3">
              <BiDotsVertical size={22} />
            </div>
          </div>
        </div>

        <div className="bg-zinc-800 rounded-md p-6">
          <p className="text-zinc-50">528K views 3 months ago</p>
          <p className="text-zinc-50">
            Learn how to Punch Needle with me! Punch Needle is a super cute
            craft where you can make adorable fluffy designs~ For my final
            project I made a Totoro Tote (or as I like to call it, a TOTE-oro)
            and I was really happy with how it turned out!
          </p>
          <p className="text-zinc-50">...more</p>
        </div>

        {/* COMMENTS SECTION */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <h5 className="text-xl text-zinc-50 font-bold">687 Comments</h5>
            <div className="flex items-center text-base text-zinc-50 gap-2">
              <HiOutlineMenuAlt1 size={20} />
              <span>Sort By</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Avatar />
            <input
              type="text"
              placeholder="Add comment.."
              className="w-full text-zinc-500 placeholder-zinc-500 text-sm focus:outline-none focus:ring-0 border-b pb-2"
            />
          </div>

          <div className="flex gap-4 ">
            <Avatar />
            <div>
              <p className="text-zinc-50">
                @zizou <span>2 months ago</span>
              </p>
              <p className="text-zinc-50">
                The type of fabric makes a huge difference in your punch needle
                experience! A really tight woven fabric doesn't leave a lot of
                room for the needle to punch through. Also the angle is
                inportant. The needle should be straight up and down. You did an
                excellent job with what you did! Also,there are special hoops
                you can get that really can lock the fabric in place so the
                fabric doesn't slip. I'm inspired and totally going to do
                something on a tote now too!
              </p>
              <div className="flex gap-5 mt-5 items-center">
                <div className="text-zinc-50 flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center">
                    <AiOutlineLike />
                  </div>
                  <span>800</span>
                </div>
                <div className="text-zinc-50 items-center bg-zinc-800 w-5 h-5 rounded-full flex items-center justify-center">
                  <AiOutlineDislike />
                </div>
                <div className="text-zinc-50">Reply</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUGGESTIONS */}
      <Suggestions />
    </div>
  );
}
