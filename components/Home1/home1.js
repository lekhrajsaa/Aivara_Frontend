import Image from "next/image";
import styles from "./home1.module.css";
import classes from "./homeTitle.module.css";
import Home2 from "../Home2/home2";
import Footer from "../Footer/Footer";
const Home1 = ({setOpenShduleDemoForm}) => {

  function scheduleDemoClickHanlder (){
    setOpenShduleDemoForm(true);
  }

  

  return (
    <>
      <div>
        <div className={styles.headsection}>
          <div className={styles.header_logo}>
            <figure>
              <img src="/Frame1.png" style={{ marginTop: "3px" }} />
            </figure>

            <h3 className={styles.header_log_title}>AIVARA</h3>
          </div>
          <div className={styles.login_button}>
            <p>Login</p>
          </div>
        </div>
        <div className={styles.body_container1}>
          <div className={styles.heading_content1}>
            <h1 className={classes.headig_title}>
              Water quality monitoring <br />
              simplified
            </h1>
            <p>We use AI to detect upto 20 parameter in 10 min.</p>
            <button onClick={scheduleDemoClickHanlder}>Schedule demo</button>
          </div>
        </div>
        <div className={styles.visionAndMission}>
          <div className={`${styles.heading_content2} ${styles.heading_content}`}>
            <img src="/Rectangle.svg" />
            <p>We are supported by Ministry of Science and Technoloy </p>
          </div>
          <div className={styles.body_container2}>
            <div className={`${styles.heading_content3} ${styles.heading_content}`}>
              <h1>Our mission</h1>
              <p>
                To protect the environment and develop
                <br />
                creative AI-based solutions to complex climate
                <br />
                and industry problems
              </p>
            </div>
            <div className={`${styles.heading_content4} ${styles.heading_content}`}>
              <div>
                <h1>Our vision</h1>
                <p>
                  To be a leading organisation in
                  <br />
                  innovative, environmentally conscious
                  <br />
                  technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.heading_content5}>
        <h1>Water quality checks are time consuming,</h1>
        <h2>Know how we break the norm</h2>
      </div>
      <div className={styles.content6}>
        <div className={styles.content6_img}>
          <img src="/computerimg.png" />
        </div>
        <div className={styles.list_content}>
          <div className={classes.feature_soft}>
            <p>
              A.Upload <strong>microscopic images</strong>
            </p>
            <p>
              B.Our <strong>AI model analyzes</strong> the images which is
              trained on <strong>biological indicator database</strong>
            </p>
            <p>
              C.Get your water quality report in <strong>0 mins</strong>
            </p>
          </div>
        </div>
      </div> */}

      {/* <div style={{position:"absolute", height: "600px", width:"600px", background: "black", top: "40%", right: "0", zIndex: "0", background: "linear-gradient(135deg, rgb(156, 199, 252), #fff, #fff, #fff, #fff)", zIndex: "-1" }}>

      </div> */}
    </>
  );
};
export default Home1;
