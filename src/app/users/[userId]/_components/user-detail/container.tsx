import { getUser } from "@jay-es/jsonplaceholder-client";
import { UserDetailPresentation } from "./presentation";

type Props = {
  userId: number;
};

export async function UserDetailContainer({ userId }: Props) {
  const user = await getUser(userId);

  return <UserDetailPresentation user={user} />;
}
