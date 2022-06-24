import React, { useRef, useState, useEffect } from 'react';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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

    return (
        <div className={classes.stepsSec}>

                <Swiper
                    direction='vertical'
                    modules={[Mousewheel]}
                    mousewheel={true}
                    onSlideChange={(e) => console.log(e)}
                    className={classes.stepsContainer}
                    style={{ height: '150px' }}
                >
                    {steps.map((step, i) => {
                        return <SwiperSlide key={step.id}>
                            <Step key={step.id} countNum={i + 1} stepInfo={step.stepInfo} />
                        </SwiperSlide>
                    }
                    )}
                </Swiper>
        </div>
    );
}

export default StepsSec;
