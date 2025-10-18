import { getUser } from "@jay-es/jsonplaceholder-client";
import { handleError } from "@/lib/error-handler";
import { PostAuthorPresentation } from "./presentation";

type Props = {
  userId: number;
};

export async function PostAuthorContainer({ userId }: Props) {
  const user = await getUser(userId).catch(handleError);

  return <PostAuthorPresentation user={user} />;
}
