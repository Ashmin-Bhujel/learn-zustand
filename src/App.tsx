import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  return (
    <main className="container mx-auto">
      <h1 className="py-4 text-center text-4xl font-semibold">Learn Zustand</h1>

      {/* User form */}
      <UserForm />

      {/* User list */}
      <UserList />
    </main>
  );
}
