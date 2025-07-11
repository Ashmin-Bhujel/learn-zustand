import { useUsers } from "@/store/userStore";
import UserCard from "./UserCard";

export default function UserList() {
  const users = useUsers();

  if (Array.isArray(users) && users.length === 0)
    return (
      <section className="mt-8">
        <h2 className="text-center text-xl">There are no users</h2>
      </section>
    );

  return (
    <section className="mt-8">
      <h2 className="text-center text-xl">Created Users</h2>

      <div className="mx-auto mt-4 flex max-w-sm flex-col gap-4">
        {Array.isArray(users) &&
          users.length > 0 &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </section>
  );
}
