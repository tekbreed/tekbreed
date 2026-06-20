import { cn } from "~/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "~/components/ui/dialog";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "group lg:hidden p-2 text-foreground transition-colors",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="group-data-[state=open]:hidden" size={24} />
          <X className="hidden group-data-[state=open]:block" size={24} />
        </button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        onInteractOutside={(e) => {
          if (
            e.target instanceof HTMLElement &&
            !e.target.closest('[data-slot="dialog-overlay"]')
          ) {
            e.preventDefault();
          }
        }}
        className="fixed top-0 left-0 w-full z-40 py-28 md:py-40 bg-background/95 backdrop-blur-sm border-none translate-x-0 translate-y-0 max-w-full rounded-none"
      >
        <div className="absolute top-8 right-8">
          <DialogClose asChild>
            <button className="p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer" aria-label="Close menu">
              <X size={24} />
            </button>
          </DialogClose>
        </div>

        <DialogTitle className="sr-only">Menu</DialogTitle>

        <nav className="flex flex-col space-y-6 container mx-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className="text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
            >
              {item.name}
            </Link>
          ))}

          <div className="mt-6">
            <a
              href="https://github.com/tekbreed/tekbreed"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-2 text-xl font-mono uppercase text-foreground/60 transition-colors ease-out duration-150 hover:text-foreground/100 py-2"
            >
              GitHub
              
            </a>
          </div>
        </nav>
      </DialogContent>
    </Dialog>
  );
};
