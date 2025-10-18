export function PostCommentsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <article
          key={index}
          className="bg-white rounded-lg shadow-md p-5 animate-pulse"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="h-5 bg-gray-300 rounded w-40"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </article>
      ))}
    </div>
  );
}
