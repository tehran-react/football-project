import React, { useState, useEffect } from 'react';
import './football.css';
import axios from 'axios'

function Football() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    let data = {
      headers: {
          "X-Auth-Token": "ea7cb0230e764362aef72269a19ed9d5",
          "content-type": "application/json"
      }
  };
    axios.get('https://api.football-data.org/v2/competitions/2021/matches', data)
        .then(response => setCount(...count, response.data.matches));

}, []);
    return (
      <div className="Main">
       <div className="title">
           برنامه بازی ها
       </div>
       <div className="flexStyle">
        <select className="select" id="cars" name="carlist" form="carform">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
       </div>
      </div>
    );
  }
  
  export default Football;