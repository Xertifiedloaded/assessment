"use client";
import Link from "next/link";
import { useState } from "react";
import {
  LayoutIcon,
  ListIcon,
  CircleUserIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-2 left-2 z-50 lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <XIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </Button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`
        fixed inset-y-0 left-0 w-[70px] bg-white border-r flex flex-col items-center py-6 z-40
        transform transition-transform duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex space-x-2 items-center ">
            <div className="flex mt-8 sm:mt-0 space-x-1  sm:flex">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          <Link href="/" className="p-3 rounded-md  bg-color">
            <LayoutIcon className="h-5 w-5 text-gray-700" />
          </Link>

          <Link href="/menu" className="p-3 rounded-md  bg-color">
            <ListIcon className="h-5 w-5 text-gray-700" />
          </Link>
          <Link href="/profile" className="p-3 rounded-md  bg-color">
            <CircleUserIcon className="h-5 w-5 text-gray-700" />
          </Link>
        </div>
      </div>
    </>
  );
}
