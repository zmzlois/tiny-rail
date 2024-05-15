import { RailwayLogo } from "@/icons/railway-logo";
import { RailwayLogoType } from "@/icons/railway-logo-type";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between   items-center py-4 ">
      <Link href="/">
        <RailwayLogoType className="w-32 h-12 aspect-video hidden sm:block" />
        <RailwayLogo className="w-32 h-12 sm:hidden" />
      </Link>
      <div>
        <nav className="flex space-x-6">
          {NavConfig.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-muted"
            >
              {item.name}
              {item.number && (
                <span className="bg-accent_2 text-accent_1 rounded-full py-[2px] px-[4px] text-xs mb-1 -mr-2 ml-1">
                  {item.number}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

const NavConfig = [
  {
    name: "Features",
    href: "https://railway.app/features",
  },
  {
    name: "Blog",
    href: "https://blog.railway.app/",
  },
  {
    name: "Docs",
    href: "https://docs.railway.app/",
  },
  {
    name: "About",
    href: "https://railway.app/about",
  },
  {
    name: "Help",
    href: "https://railway.app/help",
  },
  {
    name: "Careers",
    href: "https://railway.app/careers",
    number: "4",
  },
  {
    name: "Pricing",
    href: "https://railway.app/pricing",
  },
  {
    name: "Login",
    href: "/login",
  },
];
