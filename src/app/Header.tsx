"use client"
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
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [projectButtonOpened, setprojectButtonOpened] = useState(false);

  const menuItem = [
    "PCI-China",
    "PCI-Personnel",
    "PCI-Crackdown",
    "PCI-Outbreak",
    "PCI-NKO",
  ];
  return (
    <header className="flex place-items-center flex-col bg-white pt-5 sticky -top-40 z-20">
      <Link className="block relative" href={"/"}>
        <Image
          className="self-center"
          src="/images/pci-logo-nobg.png"
          alt={"PCI Logo"}
          width={248}
          height={140}
        />
      </Link>
      <div className="flex flex-row justify-around w-full">
        <div></div>
        <div className="flex flex-row self-center my-5">
          {/* <ButtonGroup variant="text" size="lg"> */}
          <Button variant="text" onClick={() => router.push("/about")}>
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
                className="flex items-center gap-3"
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
            <MenuList className="hidden w-16 lg:flex">
              <ul className="flex w-full flex-col gap-1">
                {menuItem.map((item) => {
                  return (
                    <MenuItem
                      key={item.toLowerCase()}
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
          <Button variant="text" onClick={() => router.push("/research")}>
            Research & Data
          </Button>
          <Button variant="text" onClick={() => router.push("/media")}>
            Media
          </Button>
          <Button variant="text" onClick={() => router.push("/presentations")}>
            Presentations
          </Button>
          <Button variant="text" onClick={() => router.push("/newsletter")}>
            Newsletter
          </Button>
          {/* </ButtonGroup> */}
        </div>
        <div className="my-5">
          <Link href="https://github.com/PSLmodels">
            <Image
              className="transition-all hover:drop-shadow-lg"
              src="/icons/github-mark.svg"
              width={50}
              height={50}
              alt={"github repo"}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
