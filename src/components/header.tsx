import { Link } from "react-router";
import { MobileMenu } from "./mobile-menu";
import { ArrowUpRightSquare } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14  w-full items-center">
      <header className="flex items-center justify-between container max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
        <img src="/images/logo.png" width={40} alt="TekBreed" />
          <p className="font-heading text-2xl">TekBreed</p>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { name: "Services", to: "#services" },
            { name: "Contact Us", to: "#contact" },
          ].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground duration-150 transition-colors ease-out"
              to={item.to}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
          <a href="http://docs.memo.tekbreed.com" target="_blank" rel="noopener noreferrer" className="max-lg:hidden">
          <Button
            size={"lg"}
            className="font-heading flex gap-2 items-center text-lg"
          >
              Try TekMemo <ArrowUpRightSquare size={16} />
          </Button>
          </a>
          <MobileMenu />
      </header>
    </div>
  );
};
