"use client";
import { Logo, Button, Card, CardContent, CardTitle } from "@/components";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function LoginPage() {
  // const { data: session } = useSession();
  return (
    <div style={{ backgroundImage: "url(login-background.svg)" }} className="size-full bg-cover bg-center">
      <div className="h-full flex flex-col">
        <div className="px-4 py-2 bg-white shadow">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-y-8">
          <Card className="min-w-[350px]">
            <CardContent>
              <CardTitle className="text-center text-2xl">Login</CardTitle>
              <Button className="w-full mt-4" onClick={() => signIn("google")}>
                Continue with Google
              </Button>
            </CardContent>
          </Card>
          <Link href="/" className="underline">
            I&#39;m a guest
          </Link>
        </div>
      </div>
    </div>
  );
}
