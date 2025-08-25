import { Logo, Button, Card, CardContent, Input } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: "url(home-background.svg)" }}
      className="size-full grid place-items-center bg-cover bg-center"
    >
      <div className="flex flex-col items-center gap-y-8">
        <Logo />
        <Card className="min-w-[350px]">
          <CardContent>
            <Input placeholder="Enter Room Code" className="text-center" />
            <Button className="w-full mt-4">Join</Button>
          </CardContent>
        </Card>
        <Link href="/login" className="underline">
          Create Quiz
        </Link>
      </div>
    </div>
  );
}
