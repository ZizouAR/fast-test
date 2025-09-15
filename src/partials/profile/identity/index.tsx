import { Link } from "react-router";
import Avatar from "../../../components/avatar";

export default function ProfileIdentity() {
  return (
    <div className="flex gap-8">
      <Avatar size="xl" src="/profile/pdp.jpg" />
      <div className="flex flex-col justify-around">
        <h1 className="text-zinc-50 text-4xl font-bold">Stella Sun</h1>
        <p className="text-sm text-zinc-500 font-medium">
          @StellaSun11 • 25.5K subscribers • 12 videos
        </p>
        <p className="text-sm text-zinc-500 font-medium">
          Kawaii crafts & fun adventures!! 🩵 <span>...more</span>
        </p>
        <p className="text-sm  font-medium">
          <Link to="/" className="text-blue-500">
            instagram.com/StellaSun111
          </Link>
          <span className="text-zinc-50"> and 1 more link</span>
        </p>
        <div className="bg-zinc-50 w-fit text-zinc-800 px-4 py-2 rounded-3xl">
          Subscribe
        </div>
      </div>
    </div>
  );
}
