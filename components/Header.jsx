"use client";
import React, { useEffect, useState } from "react";
import ThemeTogglers from "./ThemeTogglers";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
export default function Header() {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const scrollPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.addEventListener("scroll", scrollPos);
  }, []);
  return (
    <header
      className={`${
        header
          ? "py-6 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathName === "/" && "bg-[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div
          style={{ justifyContent: "space-between" }}
          className="flex items-center"
        >
          <Logo />
          <div
            style={{ columnGap: "1.5rem" }}
            className="flex items-center gap-x-6"
          >
            {/* Nav */}
            <Nav
              containerStyle="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeTogglers />
            {/* Mobile Nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
