import ShortsList from "../../../shorts/list";
import HorizontalCard from "../../card/horizontal";
import VideosTags from "../../tags";

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
  {
    title: "How to Cook the Perfect Steak",
    author_name: "ChefLina",
    nb_views: 342000,
    uploaded_at: "2025-08-15",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    title: "iPhone 17 Pro Max Review – Worth the Upgrade?",
    author_name: "TechZone",
    nb_views: 1567000,
    uploaded_at: "2025-09-05",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    title: "iPhone 17 Pro Max Review – Worth the Upgrade?",
    author_name: "TechZone",
    nb_views: 1567000,
    uploaded_at: "2025-09-05",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
];

export default function Suggestions() {
  return (
    <div className="basis-1/3 overflow-hidden">
      <VideosTags />
      <br />
      
      <HorizontalCard {...VIDEOS[0]} />

      <hr className="bg-zinc-600 w-full h-[2px] my-6" />

      <ShortsList shortsToShow={3} showMore={false} />

      <div className="space-y-2">
        {VIDEOS.map((video, index) => (
          <HorizontalCard {...video} key={index} />
        ))}
      </div>
    </div>
  );
}
