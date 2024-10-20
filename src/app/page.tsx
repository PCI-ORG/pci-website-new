"use client";
import { useRouter } from "next/navigation";

import {
  Button,
  ButtonGroup,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";


const projects = [
  {
    title: "PCI-China",
    desc: "The PCI-China series is a predictor of policy changes in China.",
    img: "/images/PCI-ChinaProjectImage.png",
  },
  {
    title: "PCI-Crackdown",
    desc: "The PCI-China series is a predictor of policy changes in China.",
    img: "/images/PCI-CrackdownImage.png",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <section className="flex flex-row flex-wrap place-content-center bg-pciWhite py-24">
        <Typography variant="h1" className="basis-2/3 text-center my-5">
          A Machine Learning Framework to Predict Policy Changes
        </Typography>
        <Typography variant="paragraph" className="basis-2/3 text-center my-5">
          The Policy Change Index (PCI) is a series of open-source machine
          learning projects that predict authoritarian regimes’ major policy
          moves by “reading” their propaganda publications.{" "}
        </Typography>
      </section>
      <hr />
      <section className="flex flex-col place-items-center my-8 mx-8 ">
        <h1 className="self-start text-3xl pl-8 my-5">Our Projects</h1>
        {projects.map((item) => {
          return (
            <Card className="w-full max-w-[96rem] max-h-[25rem] flex-row my-8 mx-8">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-1/5 shrink-0 rounded-r-none"
              >
                <img
                  src={item.img}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {item.title}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                  {item.desc}
                </Typography>
                <a href="#" className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
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
