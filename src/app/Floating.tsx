import {
  IconButton,
  Alert,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import Link from "next/link";

export default function Floating() {
  const { dark, setDarkOn } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const alertTimer = 3000;

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, alertTimer);
  }, []);

  return (
    <>
      <Alert
        className={`fixed bottom-8 right-8 max-w-[28rem] bg-white dark:bg-[#262626] text-black text-black dark:text-white transition-all z-20 drop-shadow-xl`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col items-center pl-12 py-6 ">
          <Typography variant="h3">
            <u>Newsletter</u>
          </Typography>

          <Link href="https://policychangeindex.substack.com/">
            <Image
              className="self-center m-5"
              src={
                dark
                  ? "/images/pci-logo-nobg-white.png"
                  : "/images/pci-logo-nobg.png"
              }
              alt={"PCI Logo"}
              width={248}
              height={140}
            />
          </Link>

          <Typography variant="lead">
            Sign up for the PCI Newsletter to stay up to date!
          </Typography>
        </div>
      </Alert>

      <IconButton
        className="!fixed bottom-8 left-8 z-20 !size-20 !max-w-32 !max-h-32 bg-pciWhite dark:bg-[#171717]"
        onClick={() => {
          setDarkOn(!dark);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={`${dark ? "white" : "black"}`}
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </IconButton>
    </>
  );
}
