import React, {useRef} from 'react';
import classes from './step.module.css';

const Step = ({countNum, stepInfo, currentStep}) => {

    const stepElem = useRef();

    return (
        <div ref={stepElem} className={`${classes.step} ${currentStep ? classes.highLight : ''}`}>
            <span className={classes.countNum}>{countNum}</span>
            <p className={classes.stepInfo}>{stepInfo}</p>
        </div>
    );
}

export default Step;
