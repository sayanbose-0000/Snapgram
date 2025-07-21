import ProfileBody from "@/components/profile/ProfileBody";
import ProfileHeader from "@/components/profile/ProfileHeader";

const page = () => {
  return (
    <section className="mx-4 my-10 flex flex-col justify-center items-center gap-10">
      <ProfileHeader />
      <ProfileBody />
    </section>
  );
};

export default page;