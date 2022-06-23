import React from 'react';
import classes from './line.module.css';

const Line = ({children, style}) => {
    return (
        <span style={style} className={classes.waveylineParent}>
            {children}
            <span className={classes.wavyline}></span>
        </span>
    );
}

export default Line;
