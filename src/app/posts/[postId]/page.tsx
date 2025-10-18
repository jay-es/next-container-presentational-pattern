import * as v from "valibot";
import { PostDetail } from "./_components/post-detail";
import { PostComments } from "./_components/post-comments";

const PropsSchema = v.object({
  postId: v.pipe(v.string(), v.digits(), v.transform(Number)),
});

export default async function PostDetailPage({
  params,
}: PageProps<"/posts/[postId]">) {
  const { postId } = v.parse(PropsSchema, await params);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <PostDetail postId={postId} />

      <h2 className="text-xl mt-6 mb-2">Comments</h2>
      <PostComments postId={postId} />
    </div>
  );
}
