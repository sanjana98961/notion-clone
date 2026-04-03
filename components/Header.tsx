"use client";
import { Show, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import React from "react";

function Header() {
  const { user } = useUser();
  console.log({ user });
  return (
    <div className="flex items-centre justify-between p-5">
      {user && (
        <h1 className="text-xl font-bold">{user?.firstName}'s Notion Clone</h1>
      )}
      <div>
        <Show when="signed-out">
          <SignInButton />
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </div>
  );
}

export default Header;
