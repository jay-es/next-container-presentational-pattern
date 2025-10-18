import { getComments } from "@jay-es/jsonplaceholder-client";
import { PostCommentsPresentation } from "./presentation";

type Props = {
  postId: number;
};

export async function PostCommentsContainer({ postId }: Props) {
  const comments = await getComments({ postId });

  return <PostCommentsPresentation comments={comments} />;
}
