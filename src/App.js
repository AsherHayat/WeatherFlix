import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  // Template literal to include the location in the URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=6aab8021721ead1bd59ec09527b3e4e6`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  return (
    <div className="app">

<div className="title">Weather Flix</div>
      
      <div className="container">
       
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
        <div className="top">
          
       
          <div className="location">
            <p  className="size">{data.name}</p>
          </div>
          <div className="temp">
            {
              data.main? <h1 className="bold">{data.main.temp.toFixed()}°C</h1> :null
            }
           
          </div>
          <div className="description">
            {data.weather?<p>{data.weather[0].main}</p> :null }
          </div>
        </div>

{data.main !==undefined && 


<div className="bottom">
<div className="feels">
{data.main? <p className="bold">{data.main.feels_like.toFixed()}°C<br/>Feels Like</p> :null}

</div>
<div className="humidity">
 {data.main ? <p className="bold">{data.main.humidity}%<br/>Humidity</p>:null}
</div>
<div className="wind">
  {data.wind? <p>{data.wind.speed.toFixed()}MPH<br/>Wind Speed</p> :null}
</div>
</div>


}

      



      </div>
    </div>
  );
}

export default App;
