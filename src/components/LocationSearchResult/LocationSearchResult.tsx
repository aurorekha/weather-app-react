import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import WeatherTable from "../WeatherTable/WeatherTable";
import Link from "@material-ui/core/Link";
import { handleWeatherSearch } from "../../helpers/index";

type LocationSearchResultProps = {
  locationData: any;
  geoLocation: any;
  updateGeolocation: any;
  weatherData: any;
  setWeatherData: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "25%",
      display: "block",
      color: "white",
      fontWeight: 700,
      margin: "24px auto",
      backgroundColor: "black",
      opacity: "0.5",
      padding: 12,
      "& > *": {
        margin: theme.spacing(0.5),
      },
      "&:last-of-type": {
        marginBottom: 24,
      },
    },
  })
);

const LocationSearchResult = ({
  locationData,
  geoLocation,
  updateGeolocation,
  weatherData,
  setWeatherData,
}: LocationSearchResultProps) => {
  const classes = useStyles();
  // const [weatherData, setWeatherData] = useState([] || null) || null;
  const [error, setError] = useState("");

  return (
    <div>
      {locationData
        ? locationData.map((location: any, index: number) => (
            <Link
              className={classes.root}
              key={`${index}--location-data`}
              href="#"
              onClick={(e: any) =>
                handleWeatherSearch(
                  e,
                  location.lat,
                  location.lon,
                  setError,
                  setWeatherData,
                  updateGeolocation
                )
              }
              color="inherit"
            >
              {location.display_name}
            </Link>
          ))
        : null}
      {weatherData ? (
        <WeatherTable
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
      ) : null}
    </div>
  );
};

export default LocationSearchResult;
