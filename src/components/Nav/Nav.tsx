"use client";

import { DarkThemeToggle, Navbar } from "flowbite-react";

export const Nav = () => {
  return (
    <Navbar fluid rounded>
      <div className="flex md:order-2">
        <DarkThemeToggle />
      </div>
    </Navbar>
  );
};
