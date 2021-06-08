import React from 'react';
import s from './Card.module.css';
import {NavLink} from 'react-router-dom'

export default function Card(props) {
  return (
    <div className= {s.hola}>
      <div className= {s.divButton}>
      <button className= {s.button} onClick={props.onClose}>x</button>
      </div>
      <div className={s.content}>
        <NavLink to={`/ciudad/${props.id}`}>
        <h2>{props.name}</h2>
        </NavLink>
        <div className={s.minmax}>Min
        <div>{props.min}º</div></div>
        <div className={s.minmax}>Max
        <div>{props.max}º</div></div>
      <img alt='' className={s.ima} src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>
      </div>
    </div>
    )
  };