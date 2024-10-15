"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import Carousel from "./Carousel";

import styles from "./app.module.css";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <hr />
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
      <section className="flex flex-col place-items-center my-8">
        <h1 className="self-start text-3xl pl-8 my-5">Our Projects</h1>
        <Carousel>
          <div className="h-80 flex justify-around">
            <div className={styles.carouselTextbox}>
              <Typography variant="lead">PCI-China</Typography>
              <Typography variant="paragraph">
                The PCI-China series is a predictor of policy changes in China.
              </Typography>
              <Button variant="outlined">Read More</Button>
            </div>
            <img className="h-80" src="/images/PCI-ChinaProjectImage.png" />
          </div>
          <div className="h-80 flex justify-around">
            <div className={styles.carouselTextbox}>
              <Typography variant="lead">PCI-Crackdown</Typography>
              <Typography variant="paragraph">
                The PCI-Crackdown series is a mapping from the current timeline
                to the Tiananmen timeline.
              </Typography>
              <Button variant="outlined">Read More</Button>
            </div>
            <img className="h-80" src="/images/PCI-CrackdownImage.png" />
          </div>
        </Carousel>
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
      {/* <section className="flex flex-col place-items-center my-8">

      </section> */}
      <Footer />
    </div>
  );
}
