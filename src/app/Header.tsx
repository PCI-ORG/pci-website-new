"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ButtonGroup,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

export default function Header() {
  const router = useRouter();
  const [projectButtonOpened, setprojectButtonOpened] = useState(false);
  const { dark } = useContext(ThemeContext);

  const menuItem = [
    "PCI-China",
    "PCI-Personnel",
    "PCI-Crackdown",
    "PCI-Outbreak",
    "PCI-NKO",
  ];
  return (
    <header
      className={`flex place-items-center flex-col pt-5 sticky -top-40 z-20 dark:bg-pciDark bg-white`}
    >
      <Link className="block relative" href={"/"}>
        <Image
          className="self-center"
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
      <div className="flex flex-row justify-around w-full">
        <div></div>
        <div className="flex flex-row self-center my-5">
          {/* <ButtonGroup variant="text" size="lg"> */}
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
            <Link href="https://github.com/PSLmodels">
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
            <Link href="https://github.com/PSLmodels">
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
