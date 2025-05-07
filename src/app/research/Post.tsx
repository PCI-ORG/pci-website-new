"use client";

import { Button, Collapse, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function Post({ data }: { data: any }) {
    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setContent(data[0].content);
    }, [data]);
    return (
        <>
            <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
                <Typography
                    className={"max-w-7xl hidden md:inline-block"}
                    variant="h1"
                >
                    {"Research & Data".toUpperCase()}
                </Typography>
                <Typography className={"max-w-7xl md:hidden"} variant="h3">
                    {"Research & Data".toUpperCase()}
                </Typography>

                <Markdown
                    className={"max-w-xs md:max-w-xl xl:max-w-7xl"}
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
                        ul(props) {
                            const { children } = props;
                            const ret = (children as Array<any>).filter(
                                (item) => {
                                    return typeof item == "object";
                                }
                            );
                            return <ul className="list-circle">{ret}</ul>;
                        },
                        li(props) {
                            const { children } = props;
                            const ret = (children as Array<any>).filter(
                                (item) => {
                                    return typeof item == "object";
                                }
                            );
                            return <li>{ret}</li>;
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
                        h3(props) {
                            const { children } = props;
                            return (
                                <>
                                    <Typography
                                        className="my-8 align-middle leading-loose hidden md:inline-block hover:cursor-pointer hover:drop-shadow-lg transition-all"
                                        variant="h3"
                                        onClick={() => setOpen(!open)}
                                    >
                                        {children}
                                    </Typography>
                                    <Typography
                                        className="my-8 align-middle leading-loose inline-block md:hidden hover:cursor-pointer hover:drop-shadow-lg transition-all"
                                        variant="h5"
                                        onClick={() => setOpen(!open)}
                                    >
                                        {children}
                                    </Typography>{" "}
                                    <div
                                        className={`inline-block my-8 ${
                                            open ? "rotate-90" : "rotate-0"
                                        } transition-all`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="currentColor"
                                            className={`inline-block align-middle size-6`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </div>
                                </>
                            );
                        },
                        blockquote(props) {
                            const { children } = props;
                            return <Collapse open={open}>{children}</Collapse>;
                        },
                        strong(props) {
                            const { children } = props;
                            return (
                                <Typography
                                    className="inline my-8 leading-loose font-semibold"
                                    variant="paragraph"
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
                            const { children, src, alt, title } = props;

                            if (alt == "graph")
                                return (
                                    <div className="w-full flex place-content-center">
                                        <embed
                                            className="block w-5/6 h-[40rem]"
                                            src={src}
                                        ></embed>
                                    </div>
                                );
                            else {
                                return (
                                    <Image
                                        alt={
                                            alt === undefined || alt === null
                                                ? ""
                                                : alt
                                        }
                                        src={
                                            src === undefined || src === null
                                                ? ""
                                                : `${title}/${src}`
                                        }
                                        width={1000}
                                        height={800}
                                    />
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
