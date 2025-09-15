import ProfileBanner from "../../partials/profile/banner";
import ProfileIdentity from "../../partials/profile/identity";
import ProfileTabs from "../../partials/profile/tabs";
import VideosList from "../../partials/videos/list";

export default function ProfilePage() {
  return (
    <div className="p-2 space-y-16">
      <ProfileBanner />
      <ProfileIdentity />
      <ProfileTabs />

      <div>
        <h1 className="text-xl font-bold text-zinc-50 mb-12">For You</h1>
        <VideosList />
      </div>


    </div>
  );
}


