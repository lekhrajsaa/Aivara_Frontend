import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Step from './step';

import classes from './stepsSec2.module.css';

const steps = [
    {
        id: '1',
        stepInfo: 'Upload microscopic images'
    },
    {
        id: '2',
        stepInfo: 'Our AI model analyzes the images  which is trained on biological indicator databse'
    },
    {
        id: '3',
        stepInfo: 'Get your water quality report in 10 mins '
    }
]

const StepsSec = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [topPos, setTopPos] = useState(0)
    const stepContainer = useRef();

    const stepsSecElem = useRef();

    let scrolled = 0;
    let topp = 0;
    let timeout;

    // const scrollHandler = e => {
    //     // console.log(e)

    //     if (timeout) clearTimeout(timeout);

    //     if (e.deltaY > 0 && currentStep > -1) {
    //         topp -= 20;
    //         stepContainer.current.style.top = (topPos + topp) + 'px';
    //         scrolled++;
    //         // console.log(scrolled)

    //         if (scrolled > 3) {
    //             setCurrentStep(prvStep => ++prvStep)
    //             setTopPos(prvPos => currentStep * 200)
    //             scrolled = 0;
    //             console.log(currentStep)
    //         }
    //     } else if (e.deltaY < 0 && currentStep < steps.length) {
    //         scrolled--;

    //         topp += 20;
    //         stepContainer.current.style.top = (topPos + topp) + 'px';
    //         // console.log(scrolled)

    //         if (scrolled < -3) {
    //             setTopPos(prvPos => prvPos + 200)
    //             setCurrentStep(prvStep => --prvStep)
    //             scrolled = 0;
    //             console.log(currentStep)
    //         }
    //     }
    //     timeout = setTimeout(() => {
    //         topp = 0;
    //         stepContainer.current.top = (topPos) + "px";
    //         scrolled = 0;
    //     }, 100);
    // }

    let canScroll = true;

    const scrollHandler = e => {
        console.log(stepsSecElem.current)
        if(e.deltaY < 0 && canScroll){
            canScroll = false;
            stepsSecElem.current.scrollBy(0,-155)
            // setCurrentStep(prvStep => {
            //     if(!prvStep > steps.length){
            //         return ++prvStep;
            //     }
            // })
            setTimeout(() => {
                canScroll = true;
            }, 100);
        }else if(e.deltaY > 0 && canScroll){
            canScroll = false;
            stepsSecElem.current.scrollBy(0,155)
            // setCurrentStep(prvStep => --prvStep)
            setTimeout(() => {
                canScroll = true;
            }, 800);
        }
    }

    return (
        <div ref={stepsSecElem} onWheel={scrollHandler} className={classes.stepsSec}>
            <div ref={stepContainer} style={{ top: `${topPos}px` }} className={classes.stepsContainer}>
                    {/* {steps.map((step, i) => {
                        return <Step currentStep={i == currentStep} key={step.id} countNum={i + 1} stepInfo={step.stepInfo} />
                    })} */}
                    <Step currentStep={true} key={steps[0].id} countNum={1} stepInfo={steps[0].stepInfo} />
                    <Step currentStep={true} key={steps[1].id} countNum={2} stepInfo={steps[1].stepInfo} />
                    <Step currentStep={true} key={steps[2].id} countNum={3} stepInfo={steps[0].stepInfo} />
            </div>
        </div>
    );
}

export default StepsSec;
