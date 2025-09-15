import type { ObjectId } from "./Global";

export default interface IVideo {
  id: ObjectId;
  title: string;
  author_name: string;
  nb_views: number;
  uploaded_at: string;
  video_url: string;
}
