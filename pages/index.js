import { useState } from "react";
import Head from 'next/head';
// import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home1 from "../components/Home1/home1";
import Home2 from "../components/Home2/home2";
import Footer from "../components/Footer/Footer";

// import Cards from "../components/BusinessCard/Cards";

//  import MissionAndVision from "../components/Mission-and-Vision/MissionAndVision";
import AnalysisSteps from "../components/analysisSteps/AnalysisSteps";
import ScheduleDemo from "../components/schedule-demo/ScheduleDemo";
import ChangingText from "../components/we_solve/changingText";
import ChangingWord from "../components/we_solve/changingWord";
import AnalysisRequestFormPage from "../components/Analysis-request-form/analysisRequestFormPage";

export default function Home() {
  const [openShduleDemoForm, setOpenShduleDemoForm] = useState(false);

  return (
    <>
    <Head>
      <title>Aivara</title>
      <link rel="icon" href="./favicon.ico" />
      <link rel="icon" href="./favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </Head>
    {!openShduleDemoForm && <>
        <div
          className={styles.container}
          style={{
            // background:
            //   "linear-gradient(135deg, rgb(156, 199, 252), #fff, #fff, #fff, #fff)",
            zIndex: "-2",
          }}
        >
          <Home1 setOpenShduleDemoForm={setOpenShduleDemoForm} />
        </div>
        <AnalysisSteps />
        <ScheduleDemo setOpenShduleDemoForm={setOpenShduleDemoForm} />
        <Home2 setOpenShduleDemoForm={setOpenShduleDemoForm} />
        
        <Footer setOpenShduleDemoForm={setOpenShduleDemoForm} />
      </>}
      { openShduleDemoForm && <AnalysisRequestFormPage setOpenShduleDemoForm={setOpenShduleDemoForm} />}
    </>
  );
}
