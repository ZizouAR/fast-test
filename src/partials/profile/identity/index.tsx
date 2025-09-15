import { Link } from "react-router";
import Avatar from "../../../components/avatar";
import useIsMobile from "../../../hooks/use-is-mobile";

export default function ProfileIdentity() {
  const isMobile = useIsMobile()
  return (
    <div className="flex gap-2 md:gap-8">
      <Avatar size={isMobile ? "md" : "xl"} src="/profile/pdp.jpg" />
      <div className="flex flex-col justify-around">
        <h1 className="text-zinc-50 text-2xl md:text-4xl font-bold">Stella Sun</h1>
        <p className="text-xs md:text-sm text-zinc-500 font-medium">
          @StellaSun11 • 25.5K subscribers • 12 videos
        </p>
        <p className="text-xs md:text-sm text-zinc-500 font-medium">
          Kawaii crafts & fun adventures!! 🩵 <span>...more</span>
        </p>
        <p className="text-xs md:text-sm  font-medium">
          <Link to="/" className="text-blue-500">
            instagram.com/StellaSun111
          </Link>
          <span className="text-zinc-50"> and 1 more link</span>
        </p>
        <div className="bg-zinc-50 text-center md:w-fit text-zinc-800 px-4 py-2 rounded-3xl mt-4">
          Subscribe
        </div>
      </div>
    </div>
  );
}
