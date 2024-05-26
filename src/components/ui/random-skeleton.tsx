import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

export const RandomSkeleton = ({
  className,
  index,
}: {
  className?: string;
  index: number;
}) => {
  const randomWidths = ["w-10", "w-20", "w-30", "w-40"];

  const getRandomWidthClass = (id: number) =>
    randomWidths[id % randomWidths.length];
  return (
    <div className="flex flex-col gap-2 my-4">
      {" "}
      <div className="flex gap-2">
        <Skeleton
          className={cn(
            `${getRandomWidthClass(index + 1)} inline-block h-4 mr-2`,
            className
          )}
        />{" "}
        <Skeleton
          className={cn(
            `${getRandomWidthClass(index + 2)} inline-block h-4 mr-2`,
            className
          )}
        />
      </div>
      <Skeleton
        className={cn(
          `${getRandomWidthClass(index + 3)} inline-block h-4 mr-2`,
          className
        )}
      />{" "}
      <Skeleton
        className={cn(
          `${getRandomWidthClass(index + 4)} inline-block h-4 mr-2`,
          className
        )}
      />
    </div>
  );
};
