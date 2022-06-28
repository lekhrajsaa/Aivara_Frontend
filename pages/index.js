import { useState } from "react";
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
  const [popUpOn, setPopUpOn] = useState(false);

  return (
    <>
      {!popUpOn && (
        <>
          <div
            className={styles.container}
            style={{
              // background:
              //   "linear-gradient(135deg, rgb(156, 199, 252), #fff, #fff, #fff, #fff)",
              zIndex: "-2",
            }}
          >
            <Home1 setPopUpOn={setPopUpOn} />
          </div>
          <AnalysisSteps />
          <ScheduleDemo setPopUpOn={setPopUpOn} />
          <Home2 setPopUpOn={setPopUpOn} />

          <Footer setPopUpOn={setPopUpOn} />
        </>
      )}
      {popUpOn && <AnalysisRequestFormPage setPopUpOn={setPopUpOn} />}
    </>
  );
}
