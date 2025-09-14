import { BiDotsVertical } from "react-icons/bi";

type Props = {
  title: string;
  author_name: string;
  nb_views: number;
  uploaded_at: string;
  video_url: string;
};

export default function HorizontalCard({
  video_url,
  author_name,
  nb_views,
  title,
  uploaded_at,
}: Props) {
  return (
    <div className="flex gap-3">
      <div className="rounded-lg w-54 h-32">
        <iframe
          src={video_url}
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full object-cover pointer-events-none rounded-lg"
        ></iframe>
      </div>
      {/* Info */}
      <div className="flex flex-col flex-1 gap-0.5">
        <h5 className="text-zinc-50 text-base">{title}</h5>
        <span className="text-zinc-500 font-medium text-sm">{author_name}</span>
        <span className="text-zinc-500 text-xs">
          {nb_views} de vues • {uploaded_at}
        </span>
      </div>

      {/* Menu icon */}
      <BiDotsVertical className="flex-shrink-0" color="white" size={22} />
    </div>
  );
}
