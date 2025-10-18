import { ChevronRightIcon } from "./chevron-right-icon";

export function UserListSkeleton() {
  return (
    <ul
      aria-label="user list loading"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 animate-pulse"
        >
          <div>
            <div className="h-7 bg-gray-300 rounded w-32"></div>
            <div className="h-5 bg-gray-200 rounded w-24 mt-1"></div>
          </div>
          <ChevronRightIcon />
        </li>
      ))}
    </ul>
  );
}
