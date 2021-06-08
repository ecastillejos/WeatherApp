import React, {useState} from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
const [city, setCity]= useState('');
document.getElementById("form");

  return (
    <form id='form' className={s.bar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      document.getElementById("form").reset();
    }}>
      <input className={s.form} type='text' placeholder={"¿A dónde vamos hoy?"}
      onChange={(e)=> setCity(e.target.value)}
      />
      <input type='submit' className={s.button} value='¡Andando!' />
    </form>
  )
};