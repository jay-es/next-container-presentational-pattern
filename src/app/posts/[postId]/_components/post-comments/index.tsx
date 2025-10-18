import { Suspense } from "react";
import { PostCommentsContainer } from "./container";
import { PostCommentsSkeleton } from "./skeleton";

type Props = {
  postId: number;
};

export function PostComments({ postId }: Props) {
  return (
    <Suspense fallback={<PostCommentsSkeleton />}>
      <PostCommentsContainer postId={postId} />
    </Suspense>
  );
}
