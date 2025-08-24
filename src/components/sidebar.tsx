import { Logo } from "./logo";

export function Sidebar({ children }: { children?: React.ReactNode }) {
  return (
    <div className="sticky top-0 px-4 py-2 bg-white shadow">
      <Logo />
      {children}
    </div>
  );
}
