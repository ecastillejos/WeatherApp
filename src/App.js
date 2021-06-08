import React, { useState } from "react";
import "./App.css";
import logo from "./img/Title.png";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import { Route } from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const cityExists = cities.filter((city) => city.id === ciudad.id);
          if (cityExists.length > 0) {
            alert("Ahí ya fuimos!");
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <div className="Upper">
        <Route
          exact
          path="/"
          render={() => <img alt="" className="logo" src={logo}></img>}
        />
        <Route
          exact
          path="/"
          render={() => <SearchBar onSearch={onSearch} />}
        />
        <Route exact path="/" render={() => <hr />} />
      </div>
      <Route path="/about" component={About} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}
