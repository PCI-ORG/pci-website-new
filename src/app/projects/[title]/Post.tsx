"use client";

import { Button, Typography } from "@material-tailwind/react";
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
        (document: any) => document.id.toLowerCase() == title.toLowerCase()
      )[0].content
    );
  }, [data]);
  return (
    <>
      <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
        <Typography className={"max-w-7xl hidden md:inline-block"} variant="h1">
          {title.toUpperCase()}
        </Typography>
        <Typography className={"max-w-7xl md:hidden"} variant="h3">
          {title.toUpperCase()}
        </Typography>
        <Markdown
          className={"max-w-md md:max-w-xl xl:max-w-7xl"}
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
                <a href={href === undefined || href === null ? "" : href}>
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
                  <div className="w-full flex place-content-center">
                    <embed className="block w-5/6 h-[40rem]" src={src}></embed>
                  </div>
                );
              else {
                return (
                  <div className="w-full flex place-content-center">
                    <Image
                      className="block w-5/6 "
                      alt={alt === undefined || alt === null ? "" : alt}
                      src={
                        src === undefined || src === null
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
