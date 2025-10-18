import { getPost } from "@jay-es/jsonplaceholder-client";
import { handleError } from "@/lib/error-handler";
import { PostDetailPresentation } from "./presentation";
import { PostAuthor } from "../post-author";

type Props = {
  postId: number;
};

export async function PostDetailContainer({ postId }: Props) {
  const post = await getPost(postId).catch(handleError);

  return (
    <PostDetailPresentation
      post={post}
      authorElement={<PostAuthor userId={post.userId} />}
    />
  );
}
