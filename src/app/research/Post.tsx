"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Options } from "react-markdown";

export default function Post({ data }: { data: any }) {
  const [content, setContent] = useState("");
  const router = useRouter();
  useEffect(() => {
    setContent(data[0].content);
  }, [data]);
  return (
    <>
      <section className="w-full flex flex-col place-items-center my-16">
        <Typography className={"max-w-7xl"} variant="h1">
          {"Research & Data".toUpperCase()}
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
            ul(props) {
              const { children } = props;
              console.log(children)
              return (
                <ul className="list-none">
                  {children}
                </ul>
              );
            },
            li(props) {
              const { children } = props;
              console.log(children)
              return (
                  <li>
                    <Typography
                      className="inline my-8 leading-none text-justify"
                      variant="paragraph"
                    >
                      &#9702;{children}
                    </Typography>
                  </li>
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
            h3(props) {
              const { children } = props;
              return (
                <Typography className="my-8 leading-loose" variant="h3">
                  {children}
                </Typography>
              );
            },
            strong(props) {
              const { children } = props;
              return (
                <Typography className="inline my-8 leading-loose font-semibold" variant="paragraph">
                  {children}
                </Typography>
              );
            },
            a(props) {
              const { children, href } = props;
              return (
                <a href={href === undefined || href === null ? "" : href}>
                  <Button className="inline text-sm px-2" variant="text" size="sm">
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
