import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";
import { Download, Github, Instagram, Linkedin, Menu } from "lucide-react";
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

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about-me", label: "About" },
  { to: "/articles", label: "Articles" },
  { to: "/notes", label: "Notes" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/max_sands_7/",
    label: "Instagram",
    icon: <Instagram className="size-4" />,
  },
  {
    href: "https://x.com/Max_Sands_7",
    label: "X",
    icon: <XIcon className="size-4" />,
  },
  {
    href: "https://www.linkedin.com/in/maxsands/",
    label: "LinkedIn",
    icon: <Linkedin className="size-4" />,
  },
  {
    href: "https://github.com/maxsands700",
    label: "GitHub",
    icon: <Github className="size-4" />,
  },
];

export function NavBar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <NavigationMenu className="hidden md:flex border border-border rounded-lg p-2 bg-background/50 backdrop-blur-sm">
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
          {socialLinks.map(({ href, icon }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:scale-105"
                >
                  {icon}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <Separator orientation="vertical" className="mx-4" />
          <NavigationMenuItem className="relative overflow-hidden rounded-md">
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
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
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="flex md:hidden">
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="max-w-72">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-2 px-4">
            {navLinks.map(({ to, label }) => {
              const isActive =
                to === "/" ? pathname === "/" : pathname.startsWith(to);
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary",
                    isActive && "border border-primary text-primary font-bold",
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <Separator className="mx-4 !w-auto" />
          <div className="flex justify-around px-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-primary"
              >
                {icon}
              </a>
            ))}
          </div>
          <Separator className="mx-4 !w-auto" />
          <div className="relative overflow-hidden rounded-md mx-4">
            <a
              href="/Max_Sands_Resume.pdf"
              download
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
            >
              <Download className="size-4" /> Download My Resume
            </a>
            <BorderBeam
              duration={2}
              size={50}
              borderWidth={3}
              className="from-transparent via-primary to-transparent"
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
