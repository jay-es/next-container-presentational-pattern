import { UserList } from "./_components/user-list";

export default function UserListPage() {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl mb-2">User List</h1>
      <UserList />
    </div>
  );
}
