"use client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  return (
    <div className="py-10 items-center flex justify-center absolute bg-background border border-accent_1 w-[90vh] h-[80vh] z-10 text-white rounded-lg">
      <button
        className="absolute top-3 right-3 opacity-50 hover:opacity-80"
        onClick={() => router.back()}
      >
        <Cross2Icon className="h-5 w-5" />
      </button>
      <h3>You actually think there are logs?</h3>
    </div>
  );
}
