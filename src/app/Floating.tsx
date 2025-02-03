import {
    Button,
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
            {/* newsletter popup */}
            <Alert
                className={`fixed bottom-8 right-8 max-w-[28rem] bg-white dark:bg-[#262626] text-black dark:text-white transition-all z-20 drop-shadow-xl
          scale-75 origin-bottom-right md:scale-80`}
                open={open}
                onClose={() => setOpen(false)}
                action={
                    //TODO: svg changes size when pressed, don't know why
                    <Button
                        variant="outlined"
                        color={dark ? "white" : "black"}
                        size="sm"
                        className="flex size-10 p-2 hover:drop-shadow"
                        onClick={() => setOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-5 "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </Button>
                }
            >
                <div className="flex flex-col items-center pl-12 py-6 ">
                    <Typography variant="h3">
                        <u>Newsletter</u>
                    </Typography>

                    <Link
                        className="hover:drop-shadow-2xl transition-all"
                        href="https://policychangeindex.substack.com/"
                    >
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
                        <Link
                            className="text-blue-600 underline"
                            href="https://policychangeindex.substack.com/"
                        >
                            Sign up
                        </Link>{" "}
                        for the PCI Newsletter to stay up to date!
                    </Typography>
                </div>
            </Alert>

            {/* dark mode button */}
            <IconButton
                className="!fixed bottom-8 left-8 z-20 !size-20 !max-w-32 !max-h-32 bg-pciWhite dark:bg-[#171717]
        scale-75 md:scale-100 origin-bottom-left"
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

            <div className={`z-50 bottom-4 right-4 origin-bottom-right ${process.env.NODE_ENV == "development" || process.env.NEXT_PUBLIC_STAGING == "true"? "fixed" : "hidden" }`}><span>version {process.env.NEXT_PUBLIC_VERSION}</span></div>
        </>
    );
}
