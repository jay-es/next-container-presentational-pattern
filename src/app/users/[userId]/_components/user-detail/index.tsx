import { Suspense } from "react";
import { UserDetailContainer } from "./container";
import { UserDetailSkeleton } from "./skeleton";

type Props = {
  userId: number;
};

export function UserDetail({ userId }: Props) {
  return (
    <Suspense fallback={<UserDetailSkeleton />}>
      <UserDetailContainer userId={userId} />
    </Suspense>
  );
}
