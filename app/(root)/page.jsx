import { UserButton } from "@clerk/nextjs";

import "../globals.css";
export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
