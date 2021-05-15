import './football.css';

function Football() {
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