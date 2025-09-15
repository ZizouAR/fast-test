import type IVideo from "../../../types/Video";
import VideoCard from "../card";

type Props = {
  videos: Array<IVideo>
  nbVideosToShow?: number;
  hideAvatar?: boolean;
}

export default function VideosList({videos, nbVideosToShow = 3, hideAvatar}: Props) {
  return (
    <div>
      <div className={`grid grid-cols-1 md:grid-cols-${nbVideosToShow.toString()} lg:grid-cols-${nbVideosToShow.toString()} gap-[16px] px-3`}>
        {videos.map((video, index) => (
          <VideoCard key={index} {...{...video, hideAvatar}} />
        ))}
      </div>
      <hr className="bg-zinc-600 w-full h-[2px] my-6" />
    </div>
  );
}
