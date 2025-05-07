"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Drawer,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";
import { MenuContext } from "./MenuProvider";

import styles from "../css/header.module.css";

export default function Header() {
  const router = useRouter();
  const [projectButtonOpened, setprojectButtonOpened] = useState(false);
  const { dark } = useContext(ThemeContext);
  const { openRight, closeDrawerRight, openDrawerRight } =
    useContext(MenuContext);

  const menuItem = [
    "PCI-China",
    "PCI-Personnel",
    "PCI-Tensions",
    "PCI-Crackdown",
    "PCI-Outbreak",
    "PCI-NKO",
  ];
  return (
    <header
      className={`flex place-items-center flex-col py-4 sticky -top-2 lg:-top-40 z-20 dark:bg-pciDark bg-white`}
    >
      <div className="flex flex-row justify-between lg:flex-col w-full">
        <Link className="self-start lg:self-center my-auto" href="/">
          <Image
            className="hidden lg:block select-none"
            src={
              dark
                ? "/images/pci-logo-nobg-white.png"
                : "/images/pci-logo-nobg.png"
            }
            alt={"PCI Logo"}
            width={248}
            height={140}
            onClick={() => router.push("/")}
          />
          <Image
            className="lg:hidden mx-6 select-none"
            src={
              dark
                ? "/images/pci-logo-nobg-white.png"
                : "/images/pci-logo-nobg.png"
            }
            alt={"PCI Logo"}
            width={88}
            height={50}
            onClick={() => router.push("/")}
          />
        </Link>
        <Button
          className={`${styles.background} !rounded-md self-end lg:!hidden mx-5 !p-2 size-12`}
          onClick={() => {
            openRight ? closeDrawerRight() : openDrawerRight();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={dark ? "white" : "black"}
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Button>
      </div>
      <div className="hidden lg:flex flex-row justify-around w-full">
        <div></div>
        <div className="flex flex-row self-center my-5">
          <Button
            className="text-black dark:text-white"
            variant="text"
            onClick={() => router.push("/about")}
          >
            About Us
          </Button>
          <Menu
            open={projectButtonOpened}
            handler={setprojectButtonOpened}
            allowHover
          >
            <MenuHandler>
              <Button
                variant="text"
                onClick={() => router.push("/projects")}
                className="flex items-center gap-3 text-black dark:text-white"
              >
                Projects{" "}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    projectButtonOpened ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </MenuHandler>
            <MenuList className="hidden w-16 lg:flex dark:bg-black">
              <ul className="flex w-full flex-col gap-1">
                {menuItem.map((item) => {
                  return (
                    <MenuItem
                      key={item.toLowerCase()}
                      className="dark:text-white"
                      onClick={() =>
                        router.push(`/projects/${item.toLowerCase()}`)
                      }
                    >
                      {item}
                    </MenuItem>
                  );
                })}
              </ul>
            </MenuList>
          </Menu>
          <Button
            className="text-black dark:text-white"
            variant="text"
            onClick={() => router.push("/research")}
          >
            Research & Data
          </Button>
          <Button
            className="text-black dark:text-white"
            variant="text"
            onClick={() => router.push("/media")}
          >
            Media
          </Button>
          <Button
            className="text-black dark:text-white"
            variant="text"
            onClick={() => router.push("/presentations")}
          >
            Presentations
          </Button>
          <Button
            className="text-black dark:text-white"
            variant="text"
            onClick={() => router.push("/newsletter")}
          >
            Newsletter
          </Button>
        </div>
        <div className="my-5">
          {!dark && (
            <Link href="https://github.com/PCI-ORG">
              <Image
                className="transition-all hover:drop-shadow-lg"
                src="/icons/github-mark.svg"
                width={50}
                height={50}
                alt={"github repo"}
              />
            </Link>
          )}
          {dark && (
            <Link href="https://github.com/PCI-ORG">
              <Image
                className="transition-all hover:drop-shadow-lg"
                src="/icons/github-mark-white.svg"
                width={50}
                height={50}
                alt={"github repo"}
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
