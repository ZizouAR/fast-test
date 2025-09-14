import { useNavigate } from "react-router";
import Avatar from "../../../components/avatar";
import { BiDotsVertical } from "react-icons/bi";

type Props = {
  title: string;
  author_name: string;
  nb_views: number;
  uploaded_at: string;
  video_url: string;
};

export default function VideoCard({
  author_name,
  nb_views,
  title,
  uploaded_at,
  video_url,
}: Props) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-2 rounded-lg  cursor-pointer"
      onClick={() => navigate("/videos/1")}
    >
      <iframe
        width="100%"
        height="220"
        src={video_url}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg pointer-events-none"
      ></iframe>
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar />
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
    </div>
  );
}
