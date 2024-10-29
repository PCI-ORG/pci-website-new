"use client";
import { useRouter } from "next/navigation";

import {
  Button,
  ButtonGroup,
  Typography,
  Card,
  CardHeader,
  CardBody,
  Chip,
} from "@material-tailwind/react";

const projects = [
  {
    title: "PCI-China",
    desc: "The PCI-China series is a predictor of policy changes in China.",
    img: "/images/PCI-ChinaProjectImage.png",
  },
  {
    title: "PCI-Personnel",
    desc: "The PCI-Personnel is an algorithm for tracking the prominence of different personnel around a political leader.",
    img: "/images/pci-personnel.jpg",
  },
  {
    title: "PCI-Crackdown",
    desc: "The PCI-Crackdown predicts how close in time the 2019-20 Hong Kong protests are to a Tiananmen-like crackdown by China.",
    img: "/images/PCI-CrackdownImage.png",
  },
  {
    title: "PCI-Outbreak",
    desc: "The Policy Change Index for Outbreak (PCI-Outbreak) measures the severity of an epidemic outbreak in China.",
    img: "/images/pci-outbreak.webp",
  },
  {
    title: "PCI-NKO",
    desc: "The PCI-NKO series is a predictor of policy changes in North Korea (NKO).",
    img: "/images/pci-nko.webp",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <section className="relative flex flex-row flex-wrap place-content-center bg-pciWhite overflow-hidden py-24 h-[45rem]">
        <video className="absolute top-0 w-full z-0" autoPlay loop muted controls={false}>
          <source src="/images/front-page-bg-loop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Typography variant="h1" className="basis-2/3 text-center my-5 z-10">
          A Machine Learning Framework to Predict Policy Changes
        </Typography>
        <Typography variant="paragraph" className="basis-2/3 text-center my-5 z-10">
          The Policy Change Index (PCI) is a series of open-source machine
          learning projects that predict authoritarian regimes’ major policy
          moves by “reading” their propaganda publications.{" "}
        </Typography>
      </section>
      <hr />
      <section className="flex flex-col place-items-center mx-[16rem] my-8 ">
        <h1 className="self-start text-3xl my-5">Our Projects</h1>
        {projects.map((item, index) => {
          return (
            <Card
              key={index}
              className={`relative bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[96rem] max-h-[15rem] flex-row${
                index % 2 ? "-reverse" : ""
              } my-8 mx-8 hover:scale-105 hover:cursor-pointer transition-all`}
              onClick={() => {
                router.push(`/projects/${item.title.toLowerCase()}`);
              }}
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0"
              >
                <img
                  src={item.img}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="grow flex flex-col place-content-center items-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {item.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  {item.desc}
                </Typography>
                <Chip
                  variant="gradient"
                  className="w-min flex items-center gap-2"
                  value={
                    <span>
                      Learn More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4 inline"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </span>
                  }
                />
              </CardBody>
            </Card>
          );
        })}
      </section>
      <section className="flex flex-col place-items-center my-8">
        <div className="flex flex-col place-items-center w-2/3 bg-pciRed rounded-2xl p-8">
          <Typography variant="h2" className="text-white my-5">
            Stay ahead of the change.
          </Typography>
          <Typography variant="lead" className="text-white my-5">
            <a href="/signup">
              <u>Sign up</u>
            </a>{" "}
            to stay up to date on the series of PCI projects.
          </Typography>
        </div>
      </section>
    </div>
  );
}
