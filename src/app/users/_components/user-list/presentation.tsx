import Link from "next/link";
import { User } from "@jay-es/jsonplaceholder-client";
import { ChevronRightIcon } from "./chevron-right-icon";

type Props = {
  users: User[];
};

export function UserListPresentation({ users }: Props) {
  return (
    <ul
      aria-label="user list"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {users.map((user) => (
        <li key={user.id}>
          <Link
            href={`/users/${user.id}`}
            className="flex items-center justify-between bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-600 mt-1">@{user.username}</p>
            </div>
            <ChevronRightIcon />
          </Link>
        </li>
      ))}
    </ul>
  );
}
