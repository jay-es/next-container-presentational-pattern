import { PostAuthorSkeleton } from "../post-author/skeleton";

export function PostDetailSkeleton() {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-1"></div>
      <PostAuthorSkeleton />
      <div className="space-y-2">
        <div className="h-5 bg-gray-200 rounded w-full"></div>
        <div className="h-5 bg-gray-200 rounded w-full"></div>
        <div className="h-5 bg-gray-200 rounded w-5/6"></div>
      </div>
    </article>
  );
}
