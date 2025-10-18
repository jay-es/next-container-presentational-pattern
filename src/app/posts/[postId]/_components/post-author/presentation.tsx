import { User } from "@jay-es/jsonplaceholder-client";

type Props = {
  user: User;
};

export function PostAuthorPresentation({ user }: Props) {
  return (
    <div className="text-sm text-gray-600 mb-3">
      by <span className="font-medium">{user.name}</span>
    </div>
  );
}
