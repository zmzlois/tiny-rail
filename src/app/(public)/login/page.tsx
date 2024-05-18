import { SignIn } from "@/components/auth/sign-in";

export default function Page() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-[85vh]">
      <h1>Sign In</h1>
      <SignIn className="items-center" />
    </div>
  );
}
