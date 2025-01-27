"use client";

import { Alert, Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Post({ title, data }: { title: string; data: any }) {
    const [content, setContent] = useState("");
    const router = useRouter();
    useEffect(() => {
        setContent(
            data.filter(
                (document: any) =>
                    document.id.toLowerCase() == title.toLowerCase()
            )[0].content
        );
    }, [data]);
    return (
        <>
            <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
                <Typography
                    className={"max-w-7xl hidden md:inline-block"}
                    variant="h1"
                >
                    {title.toUpperCase()}
                </Typography>
                <Typography className={"max-w-7xl md:hidden"} variant="h3">
                    {title.toUpperCase()}
                </Typography>
                <Markdown
                    className={"max-w-xs md:max-w-3xl xl:max-w-7xl"}
                    components={{
                        p(props) {
                            const { children } = props;
                            return (
                                <Typography
                                    className="my-8 !leading-relaxed md:!leading-loose text-left md:text-justify text-md md:text-lg"
                                    variant="paragraph"
                                >
                                    {children}
                                </Typography>
                            );
                        },
                        h2(props) {
                            const { children } = props;
                            return (
                                <>
                                    <Typography
                                        className="my-8 leading-loose hidden md:inline"
                                        variant="h2"
                                    >
                                        {children}
                                    </Typography>
                                    <Typography
                                        className="my-8 leading-loose md:hidden"
                                        variant="h4"
                                    >
                                        {children}
                                    </Typography>
                                </>
                            );
                        },
                        strong(props) {
                            const { children } = props;
                            return (
                                <Typography
                                    className="my-8 leading-loose text-center"
                                    variant="lead"
                                >
                                    {children}
                                </Typography>
                            );
                        },
                        a(props) {
                            const { children, href } = props;
                            return (
                                <a
                                    href={
                                        href === undefined || href === null
                                            ? ""
                                            : href
                                    }
                                >
                                    <Button
                                        className="inline text-sm px-2 text-blue-600 dark:hover:bg-neutral-500 underline"
                                        variant="text"
                                        size="sm"
                                    >
                                        {children}
                                    </Button>
                                </a>
                            );
                        },
                        img(props) {
                            const { children, src, alt } = props;

                            if (alt == "graph")
                                return (
                                    <>
                                        <Alert
                                            className="lg:hidden w-full my-6"
                                            color="amber"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="h-6 w-6 inline-block"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                                />
                                            </svg>
                                            {" "}Please view on widescreen for better
                                            experience.
                                        </Alert>
                                        <div className="w-full flex place-content-center">
                                            <embed
                                                className="block w-5/6 h-96 md:h-[40rem]"
                                                src={src}
                                            ></embed>
                                        </div>
                                    </>
                                );
                            else {
                                return (
                                    <div className="w-full flex place-content-center">
                                        <Image
                                            className="block w-5/6 "
                                            alt={
                                                alt === undefined ||
                                                alt === null
                                                    ? ""
                                                    : alt
                                            }
                                            src={
                                                src === undefined ||
                                                src === null
                                                    ? ""
                                                    : `/project/${title}/${src}`
                                            }
                                            width={1000}
                                            height={800}
                                        />
                                    </div>
                                );
                            }
                        },
                    }}
                >
                    {content}
                </Markdown>
            </section>
        </>
    );
}
