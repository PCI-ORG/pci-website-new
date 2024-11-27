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
    <div className="bg-white dark:bg-pciDark pb-16 z-0">
      <section className="relative bg-white dark:bg-pciDark overflow-hidden py-16 h-[45rem]">
        <video
          className="h-2/3 w-full md:h-full object-cover overflow-hidden z-0"
          autoPlay
          loop
          muted
          controls={false}
        >
          <source src="/images/front-page-bg-loop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-[20%] md:top-1/3 flex flex-col place-items-center w-full">
          <Typography
            variant="h3"
            className="w-2/3 basis-2/3 text-center my-5 z-10 md:hidden"
          >
            A Machine Learning Framework to Predict Policy Changes
          </Typography>
          <Typography
            variant="h1"
            className="w-2/3 basis-2/3 text-center my-5 z-10 hidden md:block"
          >
            A Machine Learning Framework to Predict Policy Changes
          </Typography>
          <Typography
            variant="paragraph"
            className="w-2/3 basis-2/3 text-center my-5 z-10 font-semibold md:font-bold"
          >
            The Policy Change Index (PCI) is a series of open-source machine
            learning projects that predict authoritarian regimes’ major policy
            moves by “reading” their propaganda publications.{" "}
          </Typography>
        </div>
      </section>
      <section className="flex flex-col place-items-center my-8 bg-white dark:bg-pciDark">
        <div className="flex flex-col w-2/3">
          <h1 className="self-start text-3xl my-5">Our Projects</h1>
          {projects.map((item, index) => {
            console.log(index % 2);
            return (
              <Card
                key={index}
                className={`relative bg-clip-border rounded-xl bg-white bg-[#e2e8f0] text-gray-700 shadow-md w-full max-w-[96rem] h-[35rem] md:h-[20rem] 
                flex flex-col md:flex-row 
                my-8  hover:scale-105 hover:cursor-pointer transition-all`}
                // flex-row${index % 2 ? "-reverse" : ""} this doesn't work why??
                onClick={() => {
                  router.push(`/projects/${item.title.toLowerCase()}`);
                }}
              >
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="m-0 w-full h-1/4 md:h-full md:w-2/5 shrink-0"
                >
                  <img
                    src={item.img}
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody className="grow flex flex-col place-content-center items-center px-1/5">
                  <Typography variant="h4" color="blue-gray" className="mb-2 hidden md:block">
                    {item.title}
                  </Typography>
                  <Typography variant="h5" color="blue-gray" className="mb-2 md:hidden">
                    {item.title}
                  </Typography>
                  <Typography color="gray" className="mb-8 mx-2 md:mx-8 font-normal">
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
        </div>
      </section>
      <section className="flex flex-col place-items-center my-8">
        <div className="flex flex-col place-items-center w-2/3 bg-pciRed rounded-2xl p-8">
          <Typography variant="h2" className="text-white my-5 hidden md:inline-block">
            Stay ahead of the change.
          </Typography>
          <Typography variant="h4" className="text-white my-5 md:hidden">
            Stay ahead of the change.
          </Typography>
          <Typography variant="lead" className="text-white my-5 hidden md:inline-block">
            <a href="/signup">
              <u>Sign up</u>
            </a>{" "}
            to stay up to date on the series of PCI projects.
          </Typography>
          <Typography variant="paragraph" className="text-white my-5 md:hidden">
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
