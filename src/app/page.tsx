"use client";
import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "@material-tailwind/react";
import Carousel from "./Carousel";
import type { CarouselProps } from "@material-tailwind/react";

import styles from "./app.module.css";

export default function Home() {
  return (
    <div>
      <header className="flex place-items-center flex-col my-5">
        <Image
          className="self-center"
          src="/images/pci-logo-nobg.png"
          width={222}
          height={125}
          alt={"PCI Logo"}
        />
        <div className="flex self-center my-5">
          <Link href="/about">
            <Button variant="text">About Us</Button>
          </Link>
          <Link href="/projects">
            <Button variant="text">Projects</Button>
          </Link>
          <Link href="/research">
            <Button variant="text">Research & Data</Button>
          </Link>
          <Link href="/media">
            <Button variant="text">Media</Button>
          </Link>
          <Link href="/presentations">
            <Button variant="text">Presentations</Button>
          </Link>
          <Link href="/newsletter">
            <Button variant="text">Newsletter</Button>
          </Link>
        </div>
      </header>
      <hr />
      <section className="flex flex-row flex-wrap place-content-center my-24">
        <Typography variant="h1" className="basis-2/3 text-center my-5">
          A Machine Learning Framework to Predict Policy Changes
        </Typography>
        <p className="basis-2/3 text-center my-5">
          The Policy Change Index (PCI) is a series of open-source machine
          learning projects that predict authoritarian regimes’ major policy
          moves by “reading” their propaganda publications.{" "}
        </p>
      </section>
      <hr />
      <section className="flex flex-col place-items-center my-8">
        <h1 className="self-start text-3xl pl-8 my-5">Our Projects</h1>
        <Carousel>
          <div className="h-80 flex justify-around">
            <div className={styles.carouselTextbox}>
              <p>PCI-China</p>
              <p>
                The PCI-China series is a predictor of policy changes in China.
              </p>
            </div>
            <img className="h-80" src="/images/PCI-ChinaProjectImage.png" />
          </div>
          <div className="h-80 flex justify-around">
            <div className={styles.carouselTextbox}>
              <p>PCI-Crackdown</p>
              <p>
                The PCI-Crackdown series is a mapping from the current timeline
                to the Tiananmen timeline.
              </p>
            </div>
            <img className="h-80" src="/images/PCI-CrackdownImage.png" />
          </div>
        </Carousel>
      </section>

      <footer className="w-full bg-white p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <img
            src="/images/pci-logo-nobg.png"
            alt="logo-ct"
            className="w-20"
          />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 GearFactory
        </Typography>
      </footer>
    </div>
  );
}
