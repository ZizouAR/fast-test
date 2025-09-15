import { BiPlay } from "react-icons/bi";
import ProfileBanner from "../../partials/profile/banner";
import ProfileIdentity from "../../partials/profile/identity";
import ProfileTabs from "../../partials/profile/tabs";
import VideoCard from "../../partials/videos/card";
import VideosList from "../../partials/videos/list";

export default function ProfilePage() {
  return (
    <div className="p-2 space-y-16">
      <ProfileBanner />
      <ProfileIdentity />
      <ProfileTabs />

      <div>
        <h1 className="text-xl font-bold text-zinc-50 mb-12">For You</h1>
        <VideosList videos={VIDEOS} hideAvatar />
      </div>

      <div>
        <div className="mb-12 flex items-center gap-5">
          <h1 className="text-xl font-bold text-zinc-50 ">Vidéos</h1>
          <BiPlay color="white" size={22} />
          <span className="text-zinc-50 text-sm font-medium">Play all</span>
        </div>
        <div className="flex gap-5 overflow-x-hidden w-[calc(100%-2rem)]">
          {[...VIDEOS, ...VIDEOS, ...VIDEOS].map((v) => (
            <VideoCard
              key={v.title}
              {...v}
              hideAvatar
              frameWidth="240"
              frameHeight="120"
            />
          ))}
        </div>
      </div>

      <hr className="border border-zinc-600" />

      <div>
        <div className="mb-12 flex items-center gap-5">
          <h1 className="text-xl font-bold text-zinc-50 ">Popular videos</h1>
          <BiPlay color="white" size={22} />
          <span className="text-zinc-50 text-sm font-medium">Play all</span>
        </div>
        <div className="flex gap-5 overflow-x-hidden w-[calc(100%-2rem)]">
          {[...VIDEOS, ...VIDEOS, ...VIDEOS].map((v) => (
            <VideoCard
              key={v.title}
              {...v}
              hideAvatar
              frameWidth="240"
              frameHeight="120"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const VIDEOS = [
  {
    title: "Top 10 JavaScript Tips You Should Know",
    author_name: "CodeWithZee",
    nb_views: 1284300,
    uploaded_at: "2025-08-10",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    title: "Live Concert: The Weekend Full Performance",
    author_name: "MusicWorld",
    nb_views: 985400,
    uploaded_at: "2025-07-29",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    title: "FC Barcelona vs Real Madrid | Highlights",
    author_name: "SportsHub",
    nb_views: 2230000,
    uploaded_at: "2025-09-01",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
];
