"use client";

import { useState, createContext } from "react";
export type ThemeType = {
  dark: boolean;
  setDarkOn: (state:any) => void;
};
export const ThemeContext = createContext<ThemeType>({
  dark: false,
  setDarkOn: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkOn, setDarkOn] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        dark: darkOn,
        setDarkOn: setDarkOn,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
