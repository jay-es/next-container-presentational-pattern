import { getPost } from "@jay-es/jsonplaceholder-client";
import { PostDetailPresentation } from "./presentation";
import { PostAuthor } from "../post-author";

type Props = {
  postId: number;
};

export async function PostDetailContainer({ postId }: Props) {
  const post = await getPost(postId);

  return (
    <PostDetailPresentation
      post={post}
      authorElement={<PostAuthor userId={post.userId} />}
    />
  );
}
