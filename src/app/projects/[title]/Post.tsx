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
        <Typography className={"max-w-7xl"} variant="h1">
          {title.toUpperCase()}
        </Typography>
        <Markdown
          className={"max-w-7xl"}
          components={{
            p(props) {
              const { children } = props;
              return (
                <Typography
                  className="my-8 leading-loose text-justify"
                  variant="paragraph"
                >
                  {children}
                </Typography>
              );
            },
            h2(props) {
              const { children } = props;
              return (
                <Typography className="my-8 leading-loose" variant="h2">
                  {children}
                </Typography>
              );
            },
            strong(props) {
              const { children } = props;
              return (
                <Typography className="my-8 leading-loose" variant="lead">
                  {children}
                </Typography>
              );
            },
            a(props) {
              const { children, href } = props;
              console.log(children);
              return (
                <a href={href === undefined || href === null ? "" : href}>
                  <Button
                    className="inline text-sm px-2 dark:text-white dark:hover:bg-neutral-800"
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
              console.log(children);

              if (alt == "graph")
                return (
                  <div className="w-full flex place-content-center">
                    <embed className="block w-5/6 h-[40rem]" src={src}></embed>
                  </div>
                );
              else {
                return (
                  <Image
                    alt={alt === undefined || alt === null ? "" : alt}
                    src={
                      src === undefined || src === null ? "" : `${title}/${src}`
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
