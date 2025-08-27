import Post from "@/components/home/Post";
import getAllPosts, { IPosts } from "@/libs/db/getAllPosts";

const HomePage = async () => {
  try {
    const posts: IPosts[] = await getAllPosts();
    return (
      <ul className="flex flex-col">
        {
          posts.map(post => {
            if (post._id) {
              return (
                <Post
                  key={post._id.toString()}
                  post={post}
                />
              );
            }
          })
        }
      </ul>
    );
  }

  catch (err) {
    console.log(err);

    return (
      <ul className="flex flex-col">
        <p>Error fetching posts</p>
      </ul>
    );
  }

};

export default HomePage;
