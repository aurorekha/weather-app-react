import React, { useState } from "react";
import LocationView from "./components/LocationView/LocationView";
import "./App.scss";

function App() {
  const [geolocation, updateGeolocation] = useState([] || null) || null;
  const [weatherData, setWeatherData] = useState([] || null) || null;
  return (
    <div>
      <header>
        <form autoComplete="off">
          <div data-test="location-view">
            <LocationView
              geoLocation={geolocation}
              updateGeolocation={updateGeolocation}
              weatherData={weatherData}
              setWeatherData={setWeatherData}
            />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
