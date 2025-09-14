import { BiDotsVertical } from "react-icons/bi";
import type { ObjectId } from "../../../types/Global";

type Props = {
  id: ObjectId;
  title: string;
  nb_views: string;
  short_url: string;
};

export default function ShortCard({ short_url, title, nb_views }: Props) {
  return (
    <div className="basis-1/4 flex flex-col gap-3">
      <img src={short_url} className="rounded-lg object-cover" />

      <div className="flex justify-between">
        <div>
          <h5 className="text-base text-zinc-50">{title}</h5>
          <span className="text-zinc-500 text-xs">{nb_views}</span>
        </div>
        <BiDotsVertical className="flex-shrink-0" color="white" size={22} />
      </div>
    </div>
  );
}
