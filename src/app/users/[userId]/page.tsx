import * as v from "valibot";
import { UserDetail } from "./_components/user-detail";
import { UserPosts } from "./_components/user-posts";

const PropsSchema = v.object({
  userId: v.pipe(v.string(), v.digits(), v.transform(Number)),
});

export default async function UserDetailPage({
  params,
}: PageProps<"/users/[userId]">) {
  const { userId } = v.parse(PropsSchema, await params);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <UserDetail userId={userId} />

      <h2 className="text-xl mt-6 mb-2">Posts</h2>
      <UserPosts userId={userId} />
    </div>
  );
}
