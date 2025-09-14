import ShortsList from "../../partials/shorts/list";
import VideosList from "../../partials/videos/list";
import VideosTags from "../../partials/videos/tags";

export default function VideosPage() {
  return (
    <div className="flex flex-col gap-5 pr-8">
      <VideosTags />

      <VideosList />
      <ShortsList />
      
      <VideosList />
      <ShortsList />
    </div>
  );
}
