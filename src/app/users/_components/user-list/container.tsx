import { getUsers } from "@jay-es/jsonplaceholder-client";
import { handleError } from "@/lib/error-handler";
import { UserListPresentation } from "./presentation";

export async function UserListContainer() {
  const users = await getUsers().catch(handleError);

  return <UserListPresentation users={users} />;
}
