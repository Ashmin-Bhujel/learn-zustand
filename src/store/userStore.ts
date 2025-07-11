import type { User, UserForm } from "@/types/user";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Types
export interface UserStore {
  users: User[];
  actions: UserStoreActions;
}

export interface UserStoreActions {
  addUser: (user: UserForm) => void;
  removeUser: (id: string) => void;
}

// UserStore
const UserStore = create(
  devtools(
    immer<UserStore>((set) => ({
      users: [],
      actions: {
        addUser: ({ username, email }) =>
          set((state) => {
            state.users.push({ id: crypto.randomUUID(), username, email });
          }),
        removeUser: (id) =>
          set((state) => {
            state.users = state.users.filter((user) => user.id !== id);
          }),
      },
    }))
  )
);

// Custom hooks
export const useUsers = () => UserStore((state) => state.users);
export const useUserActions = () => UserStore((state) => state.actions);
