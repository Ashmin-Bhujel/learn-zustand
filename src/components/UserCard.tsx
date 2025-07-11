import type { User } from "@/types/user";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useUserActions } from "@/store/userStore";
import { toast } from "sonner";

export default function UserCard({ user }: { user: User }) {
  const { removeUser } = useUserActions();

  function handleRemoveUser(id: string) {
    removeUser(id);
    toast.success("Removed user successfully");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <small className="text-muted-foreground text-xs">{user.id}</small>
        </CardTitle>
        <CardDescription className="sr-only">
          User detail of user {user.id}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p>
          <span>Username: </span>
          <span>{user.username}</span>
        </p>
        <p>
          <span>Email: </span>
          <span>{user.email}</span>
        </p>
      </CardContent>

      <CardFooter>
        <CardAction>
          <Button
            variant={"destructive"}
            onClick={() => handleRemoveUser(user.id)}
          >
            Delete User
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
