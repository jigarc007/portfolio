'use client';
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";
export default function MobileNav() {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet  open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav
              isFromMobileNav={true}
              setSheetOpen={setSheetOpen}
              containerStyle={"flex flex-col items-center gap-y-6"}
              linkStyles={"text-2xl"}
            />
          </div>
          <Socials containerStyles={"flex gap-x-4"} iconStyles={"text-2xl"} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
