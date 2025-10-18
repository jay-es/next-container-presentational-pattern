import { User } from "@jay-es/jsonplaceholder-client";

type Props = {
  user: User;
};

export function UserDetailPresentation({ user }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600 mt-1">@{user.username}</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="font-medium text-gray-700 min-w-24">Email:</span>
            <a
              href={`mailto:${user.email}`}
              className="text-blue-600 hover:underline"
            >
              {user.email}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-gray-700 min-w-24">Phone:</span>
            <a
              href={`tel:${user.phone}`}
              className="text-blue-600 hover:underline"
            >
              {user.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <span className="font-medium text-gray-700 min-w-24">Website:</span>
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
