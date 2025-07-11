import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { userFormSchema, type UserForm } from "@/types/user";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useUserActions } from "@/store/userStore";
import { toast } from "sonner";

export default function UserForm() {
  const { addUser } = useUserActions();

  const userForm = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(userData: UserForm) {
    addUser(userData);
    userForm.reset();
    toast.success("New user added successfully");
  }

  return (
    <section className="mx-auto mt-8 max-w-lg">
      <h2 className="mb-4 text-2xl font-semibold">User Form</h2>
      <Form {...userForm}>
        <form
          onSubmit={userForm.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          id="user-form"
        >
          {/* Username */}
          <FormField
            control={userForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={userForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" form="user-form">
            Add User
          </Button>
        </form>
      </Form>
    </section>
  );
}
