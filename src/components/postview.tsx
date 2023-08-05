import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import type { RouterOutputs } from "~/utils/api";
type PostWithUser = RouterOutputs["posts"]["getAll"][number];
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        src={author.profilePicture}
        alt={`${author.username}'s profile picture`}
        className="rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col ">
        <div className="flex gap-1  text-slate-300">
          <Link href={`/@${author.username}`}>
            <span className="font-semibold">{`@${author.username}`}</span> ·{" "}
          </Link>
          <Link href={`/post/${post.id}`}>
            <span className="font-thin">{dayjs(post.createdAt).fromNow()}</span>
          </Link>
        </div>
        <span className="text-2xl">{post.content}</span>
      </div>
    </div>
  );
};

export default PostView;
