import { IUserSchema } from "@/db-models/UserSchema";
import ProfilePost from "./ProfilePost";
import getAuthorPosts, { IPosts } from "@/libs/db/getAuthorPosts";

const ProfileBody = async ({ userDetails }: { userDetails: IUserSchema; }) => {
  // const postDoc = await PostModel.find({ author: userDetails._id }).populate("author");
  const postDoc: IPosts[] = await getAuthorPosts(userDetails);

  return (
    <section className="grid grid-cols-1 gap-2 tb:grid-cols-2 lp:grid-cols-1 lg-lp:grid-cols-2 vlg-lp:grid-cols-3 justify-center place-items-center">
      {
        postDoc.map(item => {
          if (item._id) {
            return (
              <ProfilePost item={item} key={item._id.toString()} />
            );
          }
          return null;
        })
      }
    </section>
  );
};

export default ProfileBody;
