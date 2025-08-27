import NotFound from "@/app/not-found";
import ProfileBody from "@/components/profile/ProfileBody";
import ProfileHeader from "@/components/profile/ProfileHeader";
import UserModel from "@/db-models/UserSchema";

const page = async ({ params }: { params: Promise<{ username: string; }>; }) => {
  const { username } = await params;

  const userDetails = await UserModel.findOne({ username });

  if (!userDetails) {
    return <NotFound />;
  }

  return (
    <section className="mx-4 my-10 flex flex-col justify-center items-center gap-10">
      <ProfileHeader userDetails={userDetails} />
      <ProfileBody userDetails={userDetails} />
    </section>
  );
};

export default page;
