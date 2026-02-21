import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function NavBar() {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-me", label: "About" },
    { to: "/articles", label: "Articles" },
  ];

  return (
    <NavigationMenu className="border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm">
      <NavigationMenuList className="gap-2">
        {navLinks.map(({ to, label }) => {
          const isActive =
            to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <NavigationMenuItem key={to}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  isActive && "border border-primary text-primary font-bold",
                )}
              >
                <Link to={to} className="hover:text-primary hover:scale-105">
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
        <Separator orientation="vertical" className="mx-4" />
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="https://www.instagram.com/max_sands_7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-105"
            >
              <Instagram className="size-4" />
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="https://x.com/Max_Sands_7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-105"
            >
              <XIcon className="size-4" />
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="https://www.linkedin.com/in/maxsands/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-105"
            >
              <Linkedin className="size-4" />
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="https://github.com/maxsands700"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary hover:scale-105"
            >
              <Github className="size-4" />
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <Separator orientation="vertical" className="mx-4" />
        <NavigationMenuItem className="relative overflow-hidden rounded-md">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a
              href="/Max_Sands_Resume.pdf"
              download
              className="hover:text-primary hover:scale-105"
            >
              <Download className="size-4" /> Download My Resume
            </a>
          </NavigationMenuLink>
          <BorderBeam
            duration={2}
            size={50}
            borderWidth={3}
            className="from-transparent via-primary to-transparent"
          />
          {/* <BorderBeam
            duration={6}
            delay={3}
            size={100}
            borderWidth={2}
            className="from-transparent via-primary/60 to-transparent"
          /> */}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
