import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="text-amber-700">Hello world</p>
      <Button size="lg" variant="destructive">
        Click me
      </Button>
    </div>
  );
}
