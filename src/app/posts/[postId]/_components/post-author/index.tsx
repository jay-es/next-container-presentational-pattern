import { Suspense } from "react";
import { PostAuthorContainer } from "./container";
import { PostAuthorSkeleton } from "./skeleton";

type Props = {
  userId: number;
};

export async function PostAuthor({ userId }: Props) {
  return (
    <Suspense fallback={<PostAuthorSkeleton />}>
      <PostAuthorContainer userId={userId} />
    </Suspense>
  );
}
