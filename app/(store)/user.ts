import { create } from "zustand";

export const userStore = create((set) => ({
  user: {
    fullname: "gupron",
  },
  updateUser: (newUser: any) =>
    set((state: any) => ({
      user: { ...state.user, ...newUser },
    })),
  deleteUser: () => set(() => ({ user: null })),
}));
