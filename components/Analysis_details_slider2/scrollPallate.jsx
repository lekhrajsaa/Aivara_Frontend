import React, {useEffect, useRef} from 'react';
import classes from './stepsSec.module.css'

const ScrollPallate = () => {
    const scrollPallate = useRef(null);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries, observer)=> {
    //         console.log(entries[0])
    //         let pallate = entries[0];
    //         function wheelEventFunc(e){
    //             e.preventDefault()
    //             scrollPallate.current.scrollIntoView()
    //         }

    //         if(pallate.isIntersecting){
    //             window.addEventListener("wheel", wheelEventFunc, { passive: false });
    //             console.log('added eventLisner')
    //         }
    //         if(!pallate.isIntersecting){
    //             window.removeEventListener('wheel', wheelEventFunc);
    //             console.log('removed eventLisner')
    //         }

    //     }, {
    //         threshold: 0.2
    //     })

    //     observer.observe(scrollPallate.current);

    //     return () => {
            
    //     };
    // }, []);


    return (
        <div ref={scrollPallate} className={classes.scrollScreen}>
            
        </div>
    );
}

export default ScrollPallate;
