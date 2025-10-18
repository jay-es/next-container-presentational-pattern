import { Suspense } from "react";
import { UserListContainer } from "./container";
import { UserListSkeleton } from "./skeleton";

export function UserList() {
  return (
    <Suspense fallback={<UserListSkeleton />}>
      <UserListContainer />
    </Suspense>
  );
}
