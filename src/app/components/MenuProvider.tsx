"use client";
import { createContext, useState } from "react";

export type MenuType = {
  openRight: boolean;
  setOpenRight: (state: any) => void;
  openDrawerRight: () => void;
  closeDrawerRight: () => void;
};

export const MenuContext = createContext<MenuType>({
  openRight: false,
  setOpenRight: () => {},
  openDrawerRight: () => {},
  closeDrawerRight: () => {},
});
export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openRight, setOpenRight] = useState<boolean>(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <MenuContext.Provider
      value={{
        openRight: openRight,
        setOpenRight: setOpenRight,
        closeDrawerRight: closeDrawerRight,
        openDrawerRight: openDrawerRight,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
