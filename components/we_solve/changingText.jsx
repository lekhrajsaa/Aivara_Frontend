import React, {useState, useEffect} from 'react';
import Line from '../line_component/line';
import classes from './changingText.module.css';
import ChangingWord from './changingWord';

const WORDS = [
    'public bodies',
    'environmentalists',
    'industries',
    'research institutes'
]

const ChangingText = () => {

    const [currentWord, setCurrentWord] = useState(WORDS[0]);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        setCurrentWord(WORDS[currentWordIndex])
    }, [currentWordIndex])

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentWordIndex(prv => ++prv % WORDS.length)
        }, 2000);
        return () => {
            clearInterval(interval)
        };
    }, []);

    return (
        <div className={classes.paragraphContainer}>
            <p className={classes.ChangingPara}>
                We solve <Line style={{height: '72px'}}>complex</Line> water problems using cutting edge technologies for <ChangingWord text={currentWord} /> 
            </p>
        </div>
    );
}

export default ChangingText;
