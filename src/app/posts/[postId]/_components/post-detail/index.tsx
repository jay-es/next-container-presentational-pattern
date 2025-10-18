import { Suspense } from "react";
import { PostDetailContainer } from "./container";
import { PostDetailSkeleton } from "./skeleton";

type Props = {
  postId: number;
};

export function PostDetail({ postId }: Props) {
  return (
    <Suspense fallback={<PostDetailSkeleton />}>
      <PostDetailContainer postId={postId} />
    </Suspense>
  );
}
