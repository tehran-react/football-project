import React, { useState, useEffect } from "react";
import "./football.css";
import axios from "axios";

function Football() {
  // const [week, setSelectedValue] = useState('');
  const [showText, setShowText] = useState(false);
  const [week, setWeek] = useState([]);
  const [matche, setMatch] = useState([]);
  useEffect(() => {
    let data = {
      headers: {
        "X-Auth-Token": "ea7cb0230e764362aef72269a19ed9d5",
        "content-type": "application/json",
      },
    };
    axios
      .get("https://api.football-data.org/v2/competitions/2021/matches", data)
      .then((response) => setMatch(...matche, response.data.matches));
  }, []);
  const chunkSize = 10;
  const arr = matche;
  const groups = arr
    .map((e, i) => {
      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
    })
    .filter((e) => {
      return e;
    });
  groups.forEach((item, i) => {
    item.id = i + 1;
    item.value = item.id + "هفته";
  });
  const taabe = (id) => {
    const selectedWeek = groups.filter((group) => {
      return group.id === id;
    });
    if(setWeek( selectedWeek)){
      console.log('sdfsdf');
    }else{
      console.log('hhh');
    }
    console.log("selectedWeek", selectedWeek);
    console.log("useState:", week);
  };

  const openModal = () => setShowText(true);
  const closeModal = () => setShowText(false);
  console.log(showText);

  console.log(groups);
  return (
    <div className="Main">
      <div className="title">برنامه بازی ها</div>
      <div className="flexStyle">
        <div className="kkk">
          <button className="buttonWeeks" onClick={openModal}>
            هفته ها
          </button>
          {showText ? (
            <div className="modal">
              <div className="flexStyle1">
                <button className="closeButton" onClick={closeModal}>
                  بستن
                </button>
              </div>
              <div className="flexStyle2">
                {groups.map((item) => {
                  return (
                    <ul className="options" key={item.id}>
                      <li onClick={() => taabe(item.id)}>{item.value}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
        {/* <div>{selectedValue.map(item =>{
          return(
            <div id={item.id}>khare babam</div>
          )
        })}</div> */}
      </div>
    </div>
  );
}

export default Football;
