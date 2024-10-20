"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Options } from "react-markdown";

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
      <section className="w-full flex flex-col place-items-center my-16">
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
                <Button
                  className="inline text-sm"
                  variant="text"
                  size="sm"
                  onClick={() =>
                    router.push(href === undefined || href === null ? "" : href)
                  }
                >
                  {children}
                </Button>
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
                    src={src === undefined || src === null ? "" : src}
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
