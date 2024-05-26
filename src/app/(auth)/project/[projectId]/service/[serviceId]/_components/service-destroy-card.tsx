"use client";
import { useRouter } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { destroyService } from "@/server/service";
import { toast } from "sonner";
import { CustomError } from "@/lib/error";
export const DestroyCard = ({
  serviceId,
  projectId,
  environmentId,
}: {
  serviceId?: string;
  projectId: string;
  environmentId?: string;
}) => {
  const router = useRouter();

  if (!serviceId) throw new CustomError("Service ID is missing");
  function handleDelete() {
    toast.info("Deleting service...");
    if (!serviceId) return console.error("Service ID is missing");
    destroyService({ serviceId, environmentId })
      .then((res) => {
        console.log(res);
        toast.info("Service deleted successfully");
        router.push(`/project/${projectId}`);
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Failed to delete service");
      });
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Card className="border border-red-400/30 justify-between flex gap-4 bg-red-700/30">
            <CardHeader className="items-start">
              <CardTitle>Destroy</CardTitle>
              <CardDescription className="text-start">
                This action is irreversible. Are you sure you want to delete
                this service?
              </CardDescription>
            </CardHeader>
            <div className="items-center px-10 flex justify-center">
              <Button
                variant="outline"
                onClick={handleDelete}
                className=" px-6 text-white py-2 "
              >
                <span>Destroy</span>
              </Button>
            </div>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <p>Destroy service currently unavailable. </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
