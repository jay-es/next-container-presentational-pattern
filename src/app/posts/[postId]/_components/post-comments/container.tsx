import { getComments } from "@jay-es/jsonplaceholder-client";
import { handleError } from "@/lib/error-handler";
import { PostCommentsPresentation } from "./presentation";

type Props = {
  postId: number;
};

export async function PostCommentsContainer({ postId }: Props) {
  const comments = await getComments({ postId }).catch(handleError);

  return <PostCommentsPresentation comments={comments} />;
}
