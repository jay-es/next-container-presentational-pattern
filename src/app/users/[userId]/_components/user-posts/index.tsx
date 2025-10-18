import { Suspense } from "react";
import { UserPostsContainer } from "./container";
import { UserPostsSkeleton } from "./skeleton";

type Props = {
  userId: number;
};

export function UserPosts({ userId }: Props) {
  return (
    <Suspense fallback={<UserPostsSkeleton />}>
      <UserPostsContainer userId={userId} />
    </Suspense>
  );
}
