import Image from "next/image";

const SingleReply = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="author_details flex gap-2 justify-start items-start p-1 my-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <Image
              src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg"
              alt="Author DP"
              height={100}
              width={100}
              className="object-cover"
            />
          </div>
        </div>

        <div className="text-sm">
          <div className="mb-1">
            <span className="mr-1 font-semibold">electricpants</span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              omnis! Animi labore nobis ut distinctio, nesciunt laudantium.
              Voluptate corrupti impedit deleniti aut vero magni delectus ullam
              labore eum modi! Quasi?
            </span>
          </div>
          <div className="flex flex-row gap-4 justify-start items-center text-gray-500">
            <span>2hrs ago</span>
            <span>Like(0)</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SingleReply;