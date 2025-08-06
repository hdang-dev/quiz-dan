import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-4 items-center p-8">
      <h1 className="font-bold">Quiz Dan</h1>
      <span>Next.js</span>
      <span>TailwindCSS</span>
      <span>Shadcn/ui</span>
      <Button>Done</Button>
    </div>
  );
}
