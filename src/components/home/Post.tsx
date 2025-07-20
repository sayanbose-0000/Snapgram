import { Heart, MessageCircle, Send, Star } from "lucide-react";
import Image from "next/image";
import CommentsModal from "../modals/CommentsModal";
import ShareModal from "../modals/ShareModal";

const Post = () => {
  return (
    <li className="rounded-md p-2 m-2 lg-tb:w-sm lp:w-sm lg-lp:w-lg">
      <div className="author_details flex gap-2 justify-start items-center p-1">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <Image src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg" alt="Author DP" height={100} width={100} className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start text-sm">
          <span>electricpants</span>
          <span className="text-gray-500">2 hrs ago</span>
        </div>
      </div>

      <div className="post p-1">
        <div className="card shadow-sm dark:bg-accent-content rounded-md ">
          <figure>
            <Image src="https://images.pexels.com/photos/753266/pexels-photo-753266.jpeg" alt="Post Image" height={2000} width={2000} className="object-cover h-full w-full" />
          </figure>
          <div className="card-body">
            <div className="flex flex-row">
              <p className="line-clamp-3 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam neque reiciendis sint quaerat? Doloribus quia amet soluta voluptate cumque nostrum id, itaque voluptatem quas illo consequatur possimus, at sequi?
                Hic architecto aut fugiat praesentium facere reprehenderit sit. Recusandae, eum ipsam pariatur quibusdam quisquam reiciendis velit iure repellendus atque eveniet officiis ratione ipsum ipsa laudantium amet delectus quasi rem dolorem!
                Iste, aperiam quibusdam ex doloribus voluptates adipisci asperiores quo quasi praesentium qui accusantium labore nesciunt. Perspiciatis, officiis debitis accusantium nesciunt ipsum recusandae ducimus nisi corrupti consequuntur ut ipsam corporis quibusdam.
                Nobis voluptas at voluptatem repudiandae maiores, consequuntur harum sequi consectetur adipisci tenetur explicabo suscipit unde veniam magni eos nulla vero? Praesentium quidem dicta ratione officia numquam voluptatem iure beatae eos.
                Tempora quam enim error, ipsa sunt laudantium, at iusto sapiente corporis voluptates, mollitia qui eos sequi doloremque aut. Labore sit nisi error quod repellendus fugiat recusandae consequatur hic, dolorem similique.
                Nemo molestias aliquam nam alias earum exercitationem reiciendis! Consequatur assumenda delectus dolores, tempora ipsam saepe nostrum corporis nisi vero doloremque. Nam amet soluta quisquam ipsam, doloremque quasi. Eum, recusandae ad!
                Amet nemo exercitationem repellendus maxime quo ea explicabo, ex commodi aliquid repudiandae rerum inventore tempora temporibus porro laudantium est. Enim quisquam fuga, eum ducimus nemo quasi at voluptas ipsum natus.
                Quisquam velit nam, totam esse modi expedita, praesentium laboriosam minima, accusamus reprehenderit veniam sed et at. Temporibus assumenda iusto deleniti! Perspiciatis dolor, porro maxime voluptas maiores aut sint suscipit facere.
                A assumenda ipsum voluptatibus neque voluptatum, quod alias nihil mollitia eaque repellendus pariatur hic, quia magnam, dolorem aperiam eius dicta aliquam aliquid laborum. Corrupti explicabo earum illo officia fugit culpa!
                At ullam tempore ipsa? Fugiat error, quisquam velit eius obcaecati dolorem nisi recusandae voluptatem impedit qui cum voluptates sed doloribus vero quod ea debitis, deleniti, illo asperiores? Necessitatibus, iusto eos?
              </p>
            </div>
            <div className="card-actions flex justify-start items-center mt-2 *:p-0 *:h-fit *:w-fit *:bg-transparent *:border-none">
              <button className="btn"><Heart /></button>
              <CommentsModal />
              <ShareModal />
              <button className="btn ml-auto shadow-none"><Star /></button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Post;