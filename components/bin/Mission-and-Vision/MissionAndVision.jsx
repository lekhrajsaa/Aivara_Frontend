import React from 'react'
import styles from "./missionAndVision.module.css";
// import classes from "./missionAndVision.module.css";
const MissionAndVision = () => {
  return (
    <section className={styles.mission_and_vision}>
      <div className={styles.body_container}>
        <div className={styles.heading_content2}>
          <h1>
            Water quality monitoring <br />
            simplified
          </h1>
          <p>We use AI to detect upto 20 parameter in 10 min.</p>
          <button>Schedule demo</button>
        </div>
        
        <div className={styles.heading_content1}>
          <img src="/Rectangle.svg" />
          <p>We are supported by Ministry of Science and Technoloy </p>
        </div>
      </div>
      <div className={styles.body_container}>
        <div className={styles.heading_content3}>
          <h1>Our mission</h1>
          <p>
            Top protect the environment and develop
            <br /> 
            Creative AI-based solutions to complex climate
            <br />
            and industry problems
          </p>
        </div>
        <div className={styles.heading_content4}>
          <div>
            <h1>Our vision</h1>
            <p>
              Top be a leading organisation in
              <br />
              innovation,environmentally conscious
              <br />
              technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionAndVision