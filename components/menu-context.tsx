"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext<{
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  stylingOpen: boolean;
  setStylingOpen: (open: boolean) => void;
  preloaderDone: boolean;
  setPreloaderDone: (done: boolean) => void;
}>({
  menuOpen: false,
  setMenuOpen: () => {},
  stylingOpen: false,
  setStylingOpen: () => {},
  preloaderDone: false,
  setPreloaderDone: () => {},
});

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [stylingOpen, setStylingOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  return (
    <MenuContext.Provider
      value={{ menuOpen, setMenuOpen, stylingOpen, setStylingOpen, preloaderDone, setPreloaderDone }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
