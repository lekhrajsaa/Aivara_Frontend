import React from 'react';
import classes from './step.module.css';

const Step = ({countNum, stepInfo}) => {

    return (
        <div className={`${classes.step}`}>
            <span className={classes.countNum}>{countNum}</span>
            <p className={classes.stepInfo}>{stepInfo}</p>
        </div>
    );
}

export default Step;
