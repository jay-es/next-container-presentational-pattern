import { getUsers } from "@jay-es/jsonplaceholder-client";
import { UserListPresentation } from "./presentation";

export async function UserListContainer() {
  const users = await getUsers();

  return <UserListPresentation users={users} />;
}
