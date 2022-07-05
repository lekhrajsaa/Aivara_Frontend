import { useState } from "react";
import Head from 'next/head';
import styles from "../styles/Home.module.css";
import Home1 from "../components/Home1/home1";
import Home2 from "../components/Home2/home2";
import Footer from "../components/Footer/Footer";
import AnalysisSteps from "../components/analysisSteps/AnalysisSteps";
import ScheduleDemo from "../components/schedule-demo/ScheduleDemo";
import AnalysisRequestFormPage from "../components/Analysis-request-form/analysisRequestFormPage";

export default function Home() {
  const [openShduleDemoForm, setOpenShduleDemoForm] = useState(false);

  return (
    <>
      <Head>
        <title>Aivara</title>
        <link rel="icon" href="./favicon.ico" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      {!openShduleDemoForm && <>
        <div className={styles.container}>
          <Home1 setOpenShduleDemoForm={setOpenShduleDemoForm} />
        </div>
        <AnalysisSteps />
        <ScheduleDemo setOpenShduleDemoForm={setOpenShduleDemoForm} />
        <Home2 setOpenShduleDemoForm={setOpenShduleDemoForm} />
        <Footer setOpenShduleDemoForm={setOpenShduleDemoForm} />
      </>}
      {openShduleDemoForm && <AnalysisRequestFormPage setOpenShduleDemoForm={setOpenShduleDemoForm} />}
    </>
  );
}
