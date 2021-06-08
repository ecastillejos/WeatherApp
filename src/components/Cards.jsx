import React from 'react';
import Card from './Card';
import s from './Cards.module.css';


export default function Cards({cities, onClose}) {
  if (cities.length > 0){
  return (
    <div className={s.cards}>
      {cities.map((c, index) => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={index}
          /> )}
      </div>
    );
  } 
  else{
    return(
      <div className={s.noCities} >Sin ciudades</div>
    )
  }
}