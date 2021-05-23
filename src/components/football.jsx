import React, { useState, useEffect } from 'react';
import './football.css';
import axios from 'axios'

function Football() {
  const[selectedValue, setSelectedValue] = useState("هفته1")
  const [showText, setShowText] = useState(false);
  const [week, setWeek] = useState([]);
  const [matche, setMatch] = useState([]);
  useEffect(() => {
    let data = {
      headers: {
          "X-Auth-Token": "ea7cb0230e764362aef72269a19ed9d5",
          "content-type": "application/json"
      }
  };
    axios.get('https://api.football-data.org/v2/competitions/2021/matches', data)
        .then(response => setMatch(...matche, response.data.matches));

}, []);
  const chunkSize = 10;
  const arr = matche;
  const groups = arr.map((e, i) => {
    return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null; 
  }).filter(e => { return e; });
  groups.forEach((item, i) => {
    item.id = i + 1;
  });
  const openModal = () => setShowText(true);
  const closeModal = () => setShowText(false);
  console.log(showText)

    console.log(groups);
    return (
      <div className="Main">
       <div className="title">
           برنامه بازی ها
       </div>
       <div className="flexStyle">
        <div className="kkk">
          <button className="buttonWeeks" onClick={openModal}>هفته ها</button>
          {showText ? 
            <div className="modal">
              <div className="flexStyle1">
                <button className="closeButton" onClick={closeModal}>بستن</button>
              </div>
              <div className="flexStyle2">
                {groups.map(item => {
                  <li className="options">{item.value}</li>
                })}
              </div>
            </div> 
          : null}
        </div>
       </div>
      </div>
    );
  }
  
  export default Football;