import React, { useRef, useState, useEffect } from 'react';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
<<<<<<< HEAD
=======
import ScrollPallate from './scrollPallate';
>>>>>>> f3cfe698fc9a57a10094721c51e87662e8dbcbc1
// import Swiper from 'swiper';
import Step from './step';

import classes from './stepsSec.module.css';


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

<<<<<<< HEAD

    function stepSecClickHandler() {
    }

    return (
        <div  className={classes.stepsSec}>

            <div className={classes.stepsContainer}>
                {steps.map((step, i) => {
                    return <Step key={step.id} countNum={i + 1} stepInfo={step.stepInfo} />
                })}
            </div>

=======
    const [wheel, setWheel] = useState(true);
    const [goToSection, setGoToSection] = useState(false)
    
    const stepSection = useRef(null);

    useEffect(()=>{
        if(goToSection){
            stepSection.current.scrollIntoView()
        }
    }, [goToSection])
    
    useEffect(() => {
        console.log('wheel', wheel)
        function wheelEventFunc(e) {
            e.preventDefault();
        }
        if(wheel){
            window.removeEventListener('wheel', wheelEventFunc);
            console.log('removed eventLisner')
            window.addEventListener('wheel', (e) => {
                if(e.deltaY > 0){
                    // window.scrollBy(0, 100)
                }
            });
        }
        if(!wheel){
            stepSection.current.scrollIntoView()
            window.addEventListener("wheel", wheelEventFunc);
            console.log('added eventLisner')
        }
    }, [wheel])

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            console.log(entries[0])
            let pallate = entries[0];

            if(pallate.isIntersecting){
                setWheel(false)
                setGoToSection(true)
            }
            if(!pallate.isIntersecting){
                setWheel(true)
                setGoToSection(false)
            }

            // if(!pallate.isIntersecting){
            //     setWheel(true)
            // }

            // if(pallate.isIntersecting){
            //     window.addEventListener("wheel", wheelEventFunc, { passive: false });
            //     console.log('added eventLisner')
            // }
            // if(!pallate.isIntersecting){
            //     window.removeEventListener('wheel', wheelEventFunc);
            //     console.log('removed eventLisner')
            // }

        }, {
            threshold: 0.2
        })

        observer.observe(stepSection.current);

        return () => {
            observer.disconnect(stepSection.current);
        };
    }, []);


    function stepSectionWheelHanlder(e) {
        // console.log(document.body.scrollTop)
    }


    useEffect(() => {
        // window.onwheel = e => {
        //     console.log(e)
        //     // window.scrollBy(0, -100)
        // }
    })

    // useEffect(()=>{
    //     function wheenEventFunc(e){
    //         e.preventDefault()
    //     }
    //     document.addEventListener("wheel", wheenEventFunc, { passive: false });
    //     setTimeout(() => {
    //         document.removeEventListener('wheel', wheenEventFunc)
    //     }, 5000);

    //     return () => {document.removeEventListener('wheel', wheenEventFunc)}
    // })

    function stepSecClickHandler(e) {
        // console.log(e)
    }

    function scrollScreenScrollHanlder(e) {
        // console.log(e)
        // if(e.deltaY > 0){
        //     window.scrollBy(0, -100 );
        //     // window.scrollTo(0, e.clientY)
        // }
    }
    return (
        <div onWheel={stepSectionWheelHanlder} ref={stepSection} onClick={stepSecClickHandler} className={classes.stepsSec}>

            <Swiper
                direction='vertical'
                modules={[Mousewheel]}
                mousewheel={true}
                onSwiper={e => console.log(e)}
                onSlideChange={(e) => {
                    console.log(e)
                    stepSection.current.scrollIntoView()

                    if (e.isEnd) {
                        console.log('isEnd', e.isEnd)
                        setTimeout(() => {
                            setWheel(true)
                            setGoToSection(false)
                            e.mousewheel.disable()
                            // e.mousewheel.enabled = false;
                        }, 500)
                    }
                }}
                className={classes.stepsContainer}
            // style={{ height: '150px' }}
            >


                {/* <ScrollPallate /> */}



                {steps.map((step, i) => {
                    return <SwiperSlide key={step.id}>
                        <Step key={step.id} countNum={i + 1} stepInfo={step.stepInfo} />
                    </SwiperSlide>
                }
                )}

                {/* <div  className={classes.stepsContainer}>

                {steps.map((step, i) => {
                    return <Step key={step.id} countNum={i + 1} stepInfo={step.stepInfo} />
                })}
            </div> */}

            </Swiper>
>>>>>>> f3cfe698fc9a57a10094721c51e87662e8dbcbc1
        </div>
    );
}

export default StepsSec;
