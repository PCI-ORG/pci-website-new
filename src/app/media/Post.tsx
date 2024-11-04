"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Options } from "react-markdown";
import Carousel from "../Carousel";

const listofMedia = [
  {
    title: "Newt's World with Newt Gingrich (Feb 2022)",
    src: "https://playlist.megaphone.fm?e=HSW8291343343&#038;light=true",
    type: "audio/mp3",
  },
  {
    title: "Fox Business's Mornings with Maria (Aug 2021)",
    src: "https://video.foxbusiness.com/v/video-embed.html?video_id=6270215896001",
  },
  {
    title: "Shootin' Straight with Ken Buck (Jul 2021)",
    src: "https://player.simplecast.com/b31f0bda-84d0-4bdd-9fcb-87b0def825c2?dark=false",
  },
  {
    title: "The Federalist Radio Hour (May 2021)",
    src: "https://mp3.ricochet.com/2021/05/China-Pod.mp3",
    type: "audio/mp3",
  },
  {
    title: "C-SPAN Washington Journal (Mar 2021)",
    src: "https://www.c-span.org/video/standalone/?510158-3/washington-journal-weifeng-zhong-discusses-us-china-relations",
  },
  {
    title: "CSIS Building the Future podcast (Aug 2020)",
    src: "https://playlist.megaphone.fm/?e=CSIS9841110929",
    type: "audio/mp3",
  },
  {
    title: "NBER Economics of AI Conference (Sep 2019)",
    src: "https://www.youtube.com/embed/EoX_nKXKUPE",
  },
];

export default function Post({ data }: { data: any }) {
  const [content, setContent] = useState("");
  const router = useRouter();
  useEffect(() => {
    setContent(data[0].content);
  }, [data]);
  return (
    <>
      <section className="relative w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
        <Typography className={"max-w-7xl"} variant="h1">
          {"Media".toUpperCase()}
        </Typography>

        <Carousel className="h-80 w-2/3" slidesToShow={3}>
          {listofMedia.map((item) => {
            return (
              <Card className="h-44">
                <CardHeader>
                  <Typography variant="paragraph">{item.title}</Typography>
                </CardHeader>
                <CardBody>
                  <iframe src={item.src} />
                </CardBody>
              </Card>
            );
          })}
        </Carousel>

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
              console.log(children);
              return (
                <ul className="list-disc">
                  <li>
                    <Typography
                      className="my-8 leading-none text-justify"
                      variant="paragraph"
                    >
                      {children}
                    </Typography>
                  </li>
                </ul>
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
                <a href={href === undefined || href === null ? "" : href}>
                  <Button
                    className="inline text-sm px-2 dark:text-white dark:hover:bg-pink"
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
