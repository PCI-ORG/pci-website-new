"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tooltip,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

const profiles = [
  {
    name: "Julian TszKin Chan, PhD",
    titles: ["Principal, Bates White Consulting"],
    desc: "Julian TszKin Chan is a Managing Economist and Lead Data Scientist in the Finance practice at Bates White Economic Consulting. He has significant experience conducting quantitative and qualitative analyses in support of expert economic testimony, including econometric modeling, Monte Carlo simulation, damages estimation, statistical sampling, and processing big data. Dr. Chan is an experienced researcher with interests in applying econometric, big data, machine learning and natural-language processing methods to analyze economic phenomena, including questions related to social networks, social media, and cryptocurrencies.",
    img: "/images/julianchan.png",
    website: "https://sites.google.com/site/ctszkin/",
  },
  {
    name: "Weifeng Zhong, PhD",
    titles: [
      "Senior Advisor, America First Policy Institute",
      "Affiliated Scholar, Mercatus Center at George Mason University",
    ],
    desc: "Weifeng Zhong serves as a Senior Advisor for the Office for Fiscal and Regulatory Analysis at the America First Policy Institute and an Affiliated Scholar at the Mercatus Center at George Mason University. He has over a decade of experience applying data analytics and artificial intelligence to policy questions. Zhong received his Ph.D. in managerial economics and strategy at Northwestern University and, before joining AFPI, was a scholar at the American Enterprise Institute and Mercatus. His work has been featured in media outlets like The Wall Street Journal, Financial Times, Bloomberg, NPR, Foreign Affairs, and Lawfare. He’s also a frequent interview guest on BBC, C-SPAN, and Fox Business, among others.",
    img: "/images/weifengzhong.jpg",
    website: "https://www.weifengzhong.com/",
  },
];

export default function AboutPage() {
  const { dark } = useContext(ThemeContext);
  return (
    <div>
      <section className="flex flex-col flex-wrap place-items-center text-black dark:text-white bg-white dark:bg-pciDark py-24 w-full">
        <Typography variant="h1">About Us</Typography>
        <div className="flex flex-row place-content-center w-2/3">
          {profiles.map((item, key) => {
            return (
              <Card
                key={key}
                className="w-96 m-16 text-black dark:text-white bg-white dark:bg-black"
              >
                <CardHeader floated={false} className="h-80">
                  <img src={item.img} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography
                    variant="h4"
                    color="blue-gray"
                    className="mb-2 dark:text-white"
                  >
                    {item.name}
                  </Typography>
                  {item.titles.map((title, key) => (
                    <Typography
                      key={key}
                      color="blue-gray"
                      className="font-medium"
                      textGradient
                    >
                      {title}
                    </Typography>
                  ))}
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                  <Tooltip content="Personal Website">
                    <a href={item.website}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke={dark ? "white" : "black"}
                        fill={dark ? "black" : "white"}
                        className="size-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </a>
                  </Tooltip>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
