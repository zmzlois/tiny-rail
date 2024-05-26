"use client";

import { useRouter } from "next/navigation";
import { Slot } from "@radix-ui/react-slot";
import {
  Cross2Icon,
  ExitFullScreenIcon,
  WidthIcon,
} from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Button } from "@/components/ui/button";
import { destroyService } from "@/server/service";
import { toast } from "sonner";
import { CustomError } from "@/lib/error";
type CardType = "service" | "deployment" | "delete";
export const ServiceMajorCard = ({
  itemName,
  children,
  className,
  params,
}: {
  itemName?: string;
  children: React.ReactNode;
  className?: string;
  params?: { projectId: string; serviceId: string };
}) => {
  const router = useRouter();

  const [large, setLarge] = useState({
    isLarge: false,
    className: "w-1/2 top-40 h-[78vh]",
  });

  function handleOnClick() {
    setLarge((prev) => ({
      isLarge: !prev.isLarge,
      className: prev.isLarge
        ? "w-1/2 top-40 h-[78vh]"
        : "w-[calc(100vw-5vw)] h-[90vh] left-10 top-20",
    }));
  }
  return (
    <div
      className={cn(
        "bg-background border border-accent_1  z-10 absolute flex flex-col rounded-lg shadow-md transition-all duration-300",
        large.className
      )}
    >
      <button
        onClick={handleOnClick}
        className="top-3 left-3 absolute rotate-45 opacity-50 hover:opacity-80"
      >
        {large.isLarge ? (
          <ExitFullScreenIcon className="w-5 h-5" />
        ) : (
          <WidthIcon className="h-5 w-5" />
        )}
      </button>

      <button
        onClick={() => router.push("/project/" + params?.projectId)}
        className="flex items-center gap-2 top-5 right-5 absolute opacity-75  "
      >
        <Cross2Icon className="h-4 w-4" />
      </button>

      <div className={cn("container flex-1  mx-auto ", className)}>
        {" "}
        {children}
      </div>
    </div>
  );
};

export const DeploymentCard = ({
  className,
  url,
  updatedAt,
}: {
  className?: string;
  url?: string | null;
  updatedAt: string;
}) => {
  if (!url) return null;
  return (
    <Card
      className={cn(
        " py-3 px-4 bg-green-500/20 border border-green-600/30 text-green-700/80 rounded-lg shadow-md",
        className
      )}
    >
      <h3 className="text-lg py-2 font-normal text-primary">Deployment URL</h3>
      <div className="flex flex-col gap-1">
        <a
          href={`https://${url}`}
          target="_blank"
          className="text-foreground hover:underline hover:underline-offset-4 transition-all text-sm font-light font-mono"
        >
          {url}
        </a>
        <p className="text-muted-foreground">
          Updated: {updatedAt.split("T")[0]}
        </p>
      </div>
    </Card>
  );
};

const cardVariants = cva("inline-flex border rounded-lg", {
  variants: {
    variant: {
      default: "bg-background border-accent_1",
      highlighted: "bg-accent_1 border-accent_1",
      destructive: "bg-red-700/50 border-red-400",
    },
    size: {
      default: "w-1/3",
      small: "w-1/4",
      medium: "w-1/2",
      large: "w-[calc(100vw-5vw)] h-full left-10 top-20",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

export const DynamicCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(cardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

DynamicCard.displayName = "DynamicCard";
