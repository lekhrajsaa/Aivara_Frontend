import React from "react";
 import StepsSec from "../Analysis_details_slider2/stepsSec";
// import StepsSec from "../Analysis_details_slider/stepsSec";
import Line from "../line_component/line";
import styles from "./analysisSteps.module.css";

const AnalysisSteps = () => {
  return (
    <section className={styles.analysisSection}>
      <div className={styles.heading_content1}>
        <h1> 
          Water quality checks are time <Line>consuming</Line>,
        </h1>
        <h2>Know how we break the norm</h2>
      </div>
      <div className={styles.content2}>
        <div className={styles.content2_img}>
          <img src="/laptop-image-with-analysis-report-1.jpg" />
        </div>
        <div className={styles.list_content}>
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
        </div>
      </div>
    </section>
  );
};

export default AnalysisSteps;
