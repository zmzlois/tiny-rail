import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SignIn } from "./auth/sign-in";
import { env } from "@/server/constants";

export const SignInDialog = ({
  triggerText,
  open,
  path,
}: {
  triggerText: string;
  open?: boolean;
  path: string;
}) => {
  console.log("[sign-in-dialog] path", path);
  return (
    <>
      {open === undefined ? (
        <Dialog>
          <DialogTrigger>
            <p className="text-sm font-medium text-muted-foreground hover:text-primary">
              {triggerText}
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col items-center gap-10">
              <DialogTitle className="text-4xl">Login</DialogTitle>
              <DialogDescription>
                <SignIn origin={path} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog open={open}>
          <DialogTrigger>
            <p className="text-sm font-medium text-muted-foreground hover:text-primary">
              {triggerText}
            </p>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col items-center gap-10">
              <DialogTitle className="text-4xl">Login</DialogTitle>
              <DialogDescription>
                <SignIn origin={path} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
