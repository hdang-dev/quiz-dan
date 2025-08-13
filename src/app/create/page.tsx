"use client";
import { Logo, Button, Card, CardContent, CardTitle } from "@/components";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function CreatePage() {
  const { data: session } = useSession();

  const signOutA = () => {
    signOut().then(() => {});
  };

  return (
    <>
      {session ? (
        <div>
          <p>{session.user?.email}</p>
          <button onClick={() => signOutA()}>out</button>
        </div>
      ) : (
        <p>anosymous</p>
      )}
    </>
  );
}
