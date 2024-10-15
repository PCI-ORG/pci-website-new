"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Header from "../Header";
import Footer from "../Footer";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <section className="flex flex-row flex-wrap place-content-center bg-pciWhite py-24">
        <Card className="w-full max-w-[96rem] max-h-[25rem] flex-row my-8">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-1/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://lh5.googleusercontent.com/jriuQFSZXjS02ZYqDYoxi3gkw60a8kIXoAgFVuFYISgba5PODtWKXnvm11_dnX90bgOGxeQWqu_BtQyVW5qqsGgVaNC4kdtZaDsKAR47BkI=w1280"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 ">
              Principal and Lead Data Scientist, Bates White Economic Consulting
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Julian TszKin Chan, PhD
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Julian TszKin Chan is a Managing Economist and Lead Data Scientist
              in the Finance practice at Bates White Economic Consulting. He has
              significant experience conducting quantitative and qualitative
              analyses in support of expert economic testimony, including
              econometric modeling, Monte Carlo simulation, damages estimation,
              statistical sampling, and processing big data. Dr. Chan is an
              experienced researcher with interests in applying econometric, big
              data, machine learning and natural-language processing methods to
              analyze economic phenomena, including questions related to social
              networks, social media, and cryptocurrencies.{" "}
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

        <Card className="w-full max-w-[96rem] max-h-[25rem] flex-row my-5">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-1/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://lh3.googleusercontent.com/SHKbxIWsSnmMd4GPI-UGi9KcUY0cOfpz-RDtrIePL-FRZ0UTE73PIWWKlII0oWu0ac5n2IKc4WMrlqNZn-N6OW6FD0gg0G415w5PuYtW-v52H_Zq=w1280"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 ">
              Senior Advisor, America First Policy Institute
            </Typography>
            <Typography variant="h6" color="gray" className="mb-4 ">
              Affiliated Scholar, Mercatus Center at George Mason University
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Weifeng Zhong, PhD
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Weifeng Zhong serves as a Senior Advisor for the Office for Fiscal
              and Regulatory Analysis at the America First Policy Institute and
              an Affiliated Scholar at the Mercatus Center at George Mason
              University. He has over a decade of experience applying data
              analytics and artificial intelligence to policy questions. Zhong
              received his Ph.D. in managerial economics and strategy at
              Northwestern University and, before joining AFPI, was a scholar at
              the American Enterprise Institute and Mercatus. His work has been
              featured in media outlets like The Wall Street Journal, Financial
              Times, Bloomberg, NPR, Foreign Affairs, and Lawfare. He’s also a
              frequent interview guest on BBC, C-SPAN, and Fox Business, among
              others.
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
      </section>
      <Footer />
    </div>
  );
}
