import { ChevronRightIcon } from "@/components/chevron-right-icon";

export function UserPostsSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <article
          key={index}
          className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 animate-pulse"
        >
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <ChevronRightIcon />
        </article>
      ))}
    </div>
  );
}
