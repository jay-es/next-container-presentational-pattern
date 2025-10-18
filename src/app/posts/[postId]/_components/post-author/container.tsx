import { getUser } from "@jay-es/jsonplaceholder-client";
import { PostAuthorPresentation } from "./presentation";

type Props = {
  userId: number;
};

export async function PostAuthorContainer({ userId }: Props) {
  const user = await getUser(userId);

  return <PostAuthorPresentation user={user} />;
}
