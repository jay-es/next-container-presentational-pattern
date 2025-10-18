import { getPost } from "@jay-es/jsonplaceholder-client";
import { PostDetailPresentation } from "./presentation";

type Props = {
  postId: number;
};

export async function PostDetailContainer({ postId }: Props) {
  const post = await getPost(postId);

  return <PostDetailPresentation post={post} />;
}
