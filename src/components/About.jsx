import React from 'react';
import s from './About.module.css';
import bg from '../img/bg2.jpg'

export default function About(){
    return(
        <div className={s.top}>
            <div className={s.ctnImg}>
                <div className={s.rct}/>
                <img alt='' className={s.imgLat} src= {bg}/>
            </div>
        </div>
    )
}