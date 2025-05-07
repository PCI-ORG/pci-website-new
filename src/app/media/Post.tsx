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
import Carousel from "../components/Carousel";
// import useEmblaCarousel from "embla-carousel-react";
// import EmblaCarousel from "../Carousel";
// import { EmblaOptionsType } from "embla-carousel";

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
  // const [emblaRef] = useEmblaCarousel();
  // const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };

  let slidesToShow = 3;
  const getViewportSize = (): { width: number; height: number } => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    return { width, height };
  };

  const slides = listofMedia.map((item, key) => {
    return (
      <Card
        key={key}
        className="text-black dark:text-white bg-white dark:bg-pciDark"
      >
        <CardHeader className="!mt-0 text-center text-black dark:text-white bg-white dark:bg-pciDark p-2">
          <Typography variant="paragraph">
            <b>{item.title}</b>
          </Typography>
        </CardHeader>
        <CardBody>
          <iframe src={item.src} />
        </CardBody>
      </Card>
    );
  });

  useEffect(() => {
    setContent(data[0].content);
  }, [data]);

  useEffect(() => {
    function handleResize() {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (width > 640) {
        if (width > 1024) {
          slidesToShow = 3;
          console.log("3");
        } else {
          slidesToShow = 2;
          console.log("2");
        }
      } else {
        slidesToShow = 1;
        console.log("1");
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="w-full flex flex-col place-items-center py-16 text-black dark:text-white bg-white dark:bg-pciDark">
        <Typography className={"max-w-7xl hidden md:inline-block"} variant="h1">
          {"Media".toUpperCase()}
        </Typography>
        <Typography className={"max-w-7xl md:hidden"} variant="h3">
          {"Media".toUpperCase()}
        </Typography>

        <Carousel className="w-2/3" slidesToShow={3}>
          {listofMedia.map((item, key) => {
            return (
              <Card
                key={key}
                className="text-black dark:text-white bg-white dark:bg-pciDark"
              >
                <CardHeader className="!mt-0 text-center text-black dark:text-white bg-white dark:bg-pciDark p-2">
                  <Typography variant="paragraph">
                    <b>{item.title}</b>
                  </Typography>
                </CardHeader>
                <CardBody>
                  <iframe src={item.src} />
                </CardBody>
              </Card>
            );
          })}
        </Carousel>
        {/* <div className="embla" ref={emblaRef}> */}
        {/* <EmblaCarousel
          className={" w-64 md:w-96 lg:w-5/6"}
          slides={slides}
          options={OPTIONS}
        ></EmblaCarousel> */}
        {/* </div> */}

        <Markdown
          className={"max-w-xs md:max-w-xl xl:max-w-7xl"}
          components={{
            p(props) {
              const { children } = props;
              return (
                <Typography
                  className="my-8 !leading-relaxed md:!leading-loose text-left md:text-justify text-md md:text-base"
                  variant="paragraph"
                >
                  {children}
                </Typography>
              );
            },
            ul(props) {
              const { children } = props;
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
