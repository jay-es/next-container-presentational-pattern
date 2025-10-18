import { getUser } from "@jay-es/jsonplaceholder-client";
import { handleError } from "@/lib/error-handler";
import { UserDetailPresentation } from "./presentation";

type Props = {
  userId: number;
};

export async function UserDetailContainer({ userId }: Props) {
  const user = await getUser(userId).catch(handleError);

  return <UserDetailPresentation user={user} />;
}
