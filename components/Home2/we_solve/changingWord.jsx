import React, {useState, useEffect} from 'react';
import classes from './changingText.module.css';

const ChangingWord = ({text}) => {
    const [word, setWord] = useState(text);
    const [wordStyle, setWordStyle] = useState({})

    useEffect(() => {
        setWordStyle({ opacity: 0})
        let timeout = setTimeout(() => {
            setWordStyle({opacity: 1})
            setWord(text)
        }, 500);
        return(()=>{
            clearTimeout(timeout);
        })
    }, [text]);

    return (
        <span style={{ ...wordStyle}} className={classes.changingWord}>{word}.</span>
    );
}

export default ChangingWord;
