import classes from "./cards.module.css";

const carddata = [
  {
    id: 1,
    image: "/CardImg1.png",
    content:
      "Using computer vision, we process microscopics image of watersample",
  },
  {
    id: 2,
    image: "/CardImg1.png",
    content:
      "Using computer vision, we process microscopics image of watersample",
  },
  {
    id: 3,
    image: "/CardImg1.png",
    content:
      "Using computer vision, we process microscopics image of watersample",
  },
  {
    id: 4,
    image: "/CardImg1.png",
    content:
      "Using computer vision, we process microscopics image of watersample",
  },
  {
    id: 5,
    image: "/CardImg1.png",
    content:
      "Using computer vision, we process microscopics image of watersample",
  },
];
const Cards = (props) => {
  // const Card = (props) => {
  //   return (
  //     <>
  //       <div className={classes.palettes}>
  //         <div className={classes.colours}>
  //           <img src={props.imgsrc} alt="pic" />
  //         </div>
  //         <div className={classes.details}>
  //           <p>{props.info}</p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      {/* <div className={classes.cards_container}> */}

      <div className={classes.palettes}>
        <div className={classes.colours}>
          <img src={props.imgsrc} alt="pic" />
        </div>
        <div className={classes.details}>
          <p>{props.info}</p>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Cards;
