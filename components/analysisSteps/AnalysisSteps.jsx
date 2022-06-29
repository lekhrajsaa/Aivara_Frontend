import React, { useEffect, useRef, useState } from "react";
import StepsSec from "../Analysis_details_slider2/stepsSec";
// import StepsSec from "../Analysis_details_slider/stepsSec";
import Line from "../line_component/line";
import styles from "./analysisSteps.module.css";
import classes from '../Analysis_details_slider2/step.module.css'

const AnalysisSteps = () => {

  const stepsMainContainer = useRef();

  useEffect(() => {
    const steps = document.querySelectorAll(`.${classes.step}`);
    let currentIndex = 0;
    let canScroll = true;
    console.log(steps)

    function wheelEventHandler(e) {
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
      
      if(e.deltaY < 0 && currentIndex === 0 && canScroll){
        // console.log('removing event')
        window.scrollBy(0, -600)
        // stepsMainContainer.current.removeEventListener('wheel', wheelEventHandler);
      }


    }

    stepsMainContainer.current.addEventListener('wheel', wheelEventHandler, { passive: false }, true)

    return () => {
      // document.querySelector(`.${classes.content2}`).removeEventListener('wheel', wheelEventHandler);
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
      <div ref={stepsMainContainer}  className={styles.content2}>
        {/* <div style={{ outline: '2px solid red' }} className={styles.list_content}> */}
        <div className={styles.content2_img}>
          <img src="/laptop-image-with-analysis-report.png" />
        </div>
        {/* <div>
            <p>
              <span>1</span>
              <br />
              Upload <strong>microscopic images</strong>
            </p>

            <p>
              <span>2</span>
              <br />
              Our <strong>AI model analyzes</strong> the images which is trained
              on <strong>biological indicator database</strong>
            </p>
            <p>
              <span>3</span>
              <br />
              Get your water quality report in <strong>0 mins</strong>
            </p>
          </div> */}
        <StepsSec />
        {/* </div> */}
      </div>
    </section>
  );
};

export default AnalysisSteps;
