import { getPosts } from "@jay-es/jsonplaceholder-client";
import { UserPostsPresentation } from "./presentation";

type Props = {
  userId: number;
};

export async function UserPostsContainer({ userId }: Props) {
  const posts = await getPosts({ userId });

  return <UserPostsPresentation posts={posts} />;
}
