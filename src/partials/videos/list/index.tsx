import VideoCard from "../card";

export default function VideosList() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[16px] px-3">
        {VIDEOS.map((video) => (
          <VideoCard key={video.title} {...video} />
        ))}
      </div>
      <hr className="bg-zinc-600 w-full h-[2px] my-6" />
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
