import ShortsList from "../../partials/shorts/list";
import VideosList from "../../partials/videos/list";
import VideosTags from "../../partials/videos/tags";

export default function VideosPage() {
  return (
    <div className="flex flex-col gap-5 px-4">
      <VideosTags />

      <VideosList videos={VIDEOS} />
      <ShortsList />

      <VideosList videos={VIDEOS} />
      <ShortsList />
    </div>
  );
}

const VIDEOS = [
  {
    id: 1,
    title: "Top 10 JavaScript Tips You Should Know",
    author_name: "CodeWithZee",
    nb_views: 1284300,
    uploaded_at: "2025-08-10",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    id: 2,
    title: "Live Concert: The Weekend Full Performance",
    author_name: "MusicWorld",
    nb_views: 985400,
    uploaded_at: "2025-07-29",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    id: 3,
    title: "FC Barcelona vs Real Madrid | Highlights",
    author_name: "SportsHub",
    nb_views: 2230000,
    uploaded_at: "2025-09-01",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    id: 4,
    title: "How to Cook the Perfect Steak",
    author_name: "ChefLina",
    nb_views: 342000,
    uploaded_at: "2025-08-15",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    id: 5,
    title: "iPhone 17 Pro Max Review – Worth the Upgrade?",
    author_name: "TechZone",
    nb_views: 1567000,
    uploaded_at: "2025-09-05",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
  {
    id: 6,
    title: "iPhone 17 Pro Max Review – Worth the Upgrade?",
    author_name: "TechZone",
    nb_views: 1567000,
    uploaded_at: "2025-09-05",
    video_url: "https://www.youtube.com/embed/fiqxEb_URX0?si=B75p41pKJK0WMhme",
  },
];
