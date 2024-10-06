import Image from "next/image";
import Carousel from "./Carousel";
import styles from "./app.module.css";

export default function Home() {
  return (
    <div className="min-w-screen">
      <header className="flex place-items-center flex-col min-w-screen my-5">
        <Image
        className="self-center"
          src="/images/pci-logo-nobg.png"
          width={222}
          height={125}
          alt={"PCI Logo"}
        />
        <div className={"flex self-center "}>
          <a className={styles.menuButton}>About Us</a>
          <a className={styles.menuButton}>Project</a>
          <a className={styles.menuButton}>Research & Data</a>
          <a className={styles.menuButton}>Media</a>
          <a className={styles.menuButton}>Presentations</a>
          <a className={styles.menuButton}>Newsletter</a>
        </div>
      </header>
      <hr/>
      <section className="flex flex-row flex-wrap place-content-center my-8">
        <h1 className="text-3xl basis-2/3 text-center my-5">
          A Machine Learning Framework to Predict Policy Changes
        </h1>
        <p className="text-xl basis-2/3 text-center my-5">
          The Policy Change Index (PCI) is a series of open-source machine
          learning projects that predict authoritarian regimes’ major policy
          moves by “reading” their propaganda publications.{" "}
        </p>
      </section>
      <hr/>
      <section className="flex flex-col place-items-center w-full my-8">
        <h1 className="self-start text-3xl pl-8 my-5">Our Projects</h1>
        <Carousel>
          <div className="h-80 flex">
            <div className={styles.carouselTextbox}>
              <h2>PCI-China</h2>
              <p>
                The PCI-China series is a predictor of policy changes in China.
              </p>
            </div>
            <img className="h-80" src="/images/PCI-ChinaProjectImage.png" />
          </div>
          <div className="h-80 flex">
            <div className={styles.carouselTextbox}>
              <h2>PCI-Crackdown</h2>
              <p>
                The PCI-Crackdown series is a mapping from the current timeline
                to the Tiananmen timeline.
              </p>
            </div>
            <img className="h-80" src="/images/PCI-CrackdownImage.png" />
          </div>
        </Carousel>
      </section>
    </div>
  );
}
