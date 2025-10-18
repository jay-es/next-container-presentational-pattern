import { getPosts } from "@jay-es/jsonplaceholder-client";
import { handleError } from "@/lib/error-handler";
import { UserPostsPresentation } from "./presentation";

type Props = {
  userId: number;
};

export async function UserPostsContainer({ userId }: Props) {
  const posts = await getPosts({ userId }).catch(handleError);

  return <UserPostsPresentation posts={posts} />;
}
