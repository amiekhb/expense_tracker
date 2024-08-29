import Image from "next/image";
import LogIn from "./components/logIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />
    </main>
  );
}
