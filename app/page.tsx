"use client";

import { useState } from "react";
import { userStore } from "./(store)/user";

const Home = () => {
  const user = userStore((state: any) => state.user);
  const updateUser = userStore((state: any) => state.updateUser);
  const deleteUser = userStore((state: any) => state.deleteUser);
  const [newUser, setNewUser] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateUser({
      fullname: newUser,
    });
  };

  return (
    <>
      <main className="flex flex-col gap-6 p-[5rem]">
        <p>{user ? user.fullname : "Please fill the name"}</p>
        <div className="flex gap-4">
          <p>Update name :</p>
          <input
            type="text"
            className="border px-2 placeholder:text-slate-500 text-black w-[15rem]"
            placeholder="name..."
            onChange={(e: any) => setNewUser(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-fit px-5 py-1.5 rounded-md bg-green-700 hover:bg-green-900 transition-all duration-200"
          >
            Submit
          </button>
          <button
            onClick={deleteUser}
            className="w-fit px-5 py-1.5 rounded-md bg-red-700 hover:bg-red-900 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
