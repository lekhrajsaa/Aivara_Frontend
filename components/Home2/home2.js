import classes from "./home2.module.css";
// import Home3 from "../Home3/Home3";
// import img from "../../public/computerimg.png";
// import Footer from "../Footer/Footer";
import Cards from "../BusinessCard/Cards";
import ChangingText from "../we_solve/changingText";
import Contactus from "./contactus_form/contactus";
import Link from "next/link";
const carddata = [
  {
    id: 1,
    image: "/CardImg1.png",
    context:
      "Using computer vision, we process microscopics image of watersample",
  },
  {
    id: 2,
    image: "/CardImg2.png",
    context:
      "Our AI model has been trained on an extensive dataset having research data over 10 years",
  },
  {
    id: 3,
    image: "/CardImg3.png",
    context:
      "We detemine chemical, physical and biological parameters of water quality",
  },
  {
    id: 4,
    image: "/CardImg4.png",
    context: "patent pendding technology with current accuracy of 85%",
  },
  {
    id: 5,
    image: "/CardImg5.png",
    context:
      "",
  },
];

const Home2 = ({setPopUpOn}) => {

  function scheduleDemoBtnClickHanlder(){
    setPopUpOn(true)
  }

  return (
    <>
      {/* <div className={classes.first_bg_img}>
        <p>
          Our software platform emplower{" "}
          <strong>
            scientists,
            <br />
            researchers and labs{" "}
          </strong>
          to get
          <strong>
            {" "}
            realtime
            <br />
            parameters
          </strong>
        </p>
      </div> */}
      {/* <div className={classes.first_bg_img_belowContent}>
        <p>
          We solve complex water problems using
          <br />
          <strong>cutting edge technologies for</strong>
        </p>
      </div> */}
      {/* <div className={classes.second_bg_img}></div> */}

      <div className={classes.homethree_heading}>
        <div className={classes.homethree_heading_h1}>
          <h1>
            Making water quality analysis
            <strong className={classes.headingstrong}> easier</strong>
          </h1>
        </div>

        <div className={classes.business_card}>
          {carddata.map((item) => {
            const { image, context, id } = item;
            return <Cards key={id} imgsrc={image} info={context} />;
          })}
        </div>
      </div>
      <div className={classes.btn_second}>
        <button onClick={scheduleDemoBtnClickHanlder}>Know more</button>
      </div>
      <div className={classes.water_problem_content}>
        <h5 className={classes.first_statment}>
          <ChangingText />
        </h5>
        <p className={classes.second_statement}>Discover more by experience</p>
        <button
          onClick={scheduleDemoBtnClickHanlder}
          className={classes.btn_third}
        >
          Schedule demo
        </button>
      </div>

      <div className={classes.early_brackers}>
        <h1>Early backers</h1>
        <div className={classes.brackers_logos}>
          <a href="https://dst.gov.in/" target="blank">
            <img src="/Rectangle71.png" alt="pic" />
          </a>
          <a href="https://bhau.org/" target="blank">
            <img src="/clogo2.png" alt="pic" />{" "}
          </a>
          <a href="https://nidhi-prayas.org/" target="blank">
            <img src="/clogo3.png" alt="pic" />{" "}
          </a>
          <a href="#" target="blank">
            <img src="/clogo4.png" alt="pic" />{" "}
          </a>
        </div>
      </div> 

      <div className={classes.form_area}>
        <h1>Get in touch with us</h1>
        <Contactus />
      </div>

      {/* <Footer /> */}
      {/* <div className={classes.footerbody}>
        <div className={classes.footer_mainBody}>
          <div className={classes.footer_body_one}>
            <div className={classes.footer_head_content}>
              <h1>
                We are building a revolutionary
                <br />
                product that will change how water
                <br />
                quality monitoring works
              </h1>
            </div>
            <div className={classes.footer_second_content}>
              <h3>Sechdule Demo</h3>
              <h2>Sign Up</h2>
              <h2>Sign In</h2>
            </div>
          </div>
          <div></div>
        </div>
      </div> */}
    </>
  );
};
export default Home2;

{
  /* <img src="/Rectangle71.png" alt="pic" />
          <img src="/clogo2.png" alt="pic" />
          <img src="/clogo3.png" alt="pic" />
          <img src="/clogo4.png" alt="pic" /> */
}
