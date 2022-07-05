import React, { useEffect, useRef, useState } from "react";
import StepsSec from "./Analysis_details_slider2/stepsSec";
// import StepsSec from "../Analysis_details_slider/stepsSec";
import Line from "../UI/line_component/line";
import Image from 'next/image';
import laptopImg from './laptop-image-with-analysis-report.png';
import laptopImg1 from '../../public/laptopImage.png';
import styles from "./analysisSteps.module.css";
import classes from './Analysis_details_slider2/step.module.css'

const AnalysisSteps = () => {

  const stepsMainContainer = useRef();
  const [smallDevice, setSmallDevice] = useState(false);

  useEffect(() => {
    const steps = document.querySelectorAll(`.${classes.step}`);
    let currentIndex = 0;
    let canScroll = true;
    console.log(steps)

    function wheelEventHandler(e) {

      if (window.innerWidth > 1000) {
        console.log(window.innerWidth, (window.innerWidth < 600))
        e.preventDefault();
        if (e.deltaY > 0 && canScroll && currentIndex < 2) {
          canScroll = false;
          currentIndex++;
          steps[currentIndex].scrollIntoView();
          console.log('scrolling into view')
          setTimeout(() => {
            canScroll = true;
          }, 300);

        }
        if (e.deltaY < 0 && canScroll && currentIndex > 0) {
          canScroll = false;
          currentIndex--;
          steps[currentIndex].scrollIntoView();
          console.log('scrolling into view')
          setTimeout(() => {
            canScroll = true;
          }, 300);

        }

        //Removing EventListeners
        if (e.deltaY > 0 && currentIndex === 2 && canScroll) {
          // console.log('removing event')
          window.scrollBy(0, 600)
          // stepsMainContainer.current.removeEventListener('wheel', wheelEventHandler);
        }

        if (e.deltaY < 0 && currentIndex === 0 && canScroll) {
          // console.log('removing event')
          window.scrollBy(0, -600)
          // stepsMainContainer.current.removeEventListener('wheel', wheelEventHandler);
        }


      }
    }

    stepsMainContainer.current.addEventListener('wheel', wheelEventHandler, { passive: false }, true)


    if (window.innerWidth < 1000) {
      setSmallDevice(true)
    }

    window.onresize = e => {
      if (window.innerWidth < 1000) {
        setSmallDevice(true)
      } else {
        setSmallDevice(false)
      }
    }

    return () => {

    };
  }, []);



  return (
    <section className={styles.analysisSection}>
      <div className={styles.heading_content1}>
        <h1>
          Water quality checks are time <Line>consuming</Line>,
        </h1>
        <h2>Know how we break the norm</h2>
      </div>
      <div ref={stepsMainContainer} className={styles.content2}>
        {/* <div style={{ outline: '2px solid red' }} className={styles.list_content}> */}
        <div className={styles.content2_img}>
          {
            !smallDevice && <Image src={laptopImg} />
          }
          {
            smallDevice && <Image src={laptopImg1} />
          }

          {/* <Image src={laptopImg} /> */}
          {/* <img src="/laptop-image-with-analysis-report.png" /> */}
        </div>
        <StepsSec />
        {/* </div> */}
      </div>
    </section>
  );
};

export default AnalysisSteps;
