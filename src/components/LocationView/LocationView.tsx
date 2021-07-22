import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import LocationSearchResult from "../LocationSearchResult/LocationSearchResult";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { handleGeoLocationSearch } from "../../helpers/index";

type LocationViewProps = {
  geoLocation: any;
  updateGeolocation: any;
  weatherData: any;
  setWeatherData: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "inline",
      marginLeft: 24,
    },
    alert: {
      width: "25%",
      margin: "24px auto",
    },
  })
);

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LocationView = ({
  geoLocation,
  updateGeolocation,
  weatherData,
  setWeatherData,
}: LocationViewProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();

  return (
    <div className="App app__form">
      <TextField
        variant="standard"
        required
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <div className={classes.root}>
        <Button
          data-testid="submit-form"
          variant="contained"
          color="primary"
          onClick={(event) =>
            handleGeoLocationSearch(
              event,
              updateGeolocation,
              setWeatherData,
              setError,
              value
            )
          }
          type="submit"
        >
          Get Weather
        </Button>
      </div>
      {error ? (
        <Alert className={classes.alert} severity="error">
          Error - {error}
        </Alert>
      ) : (
        <LocationSearchResult
          data-testid="location-result"
          locationData={geoLocation}
          geoLocation={geoLocation}
          updateGeolocation={updateGeolocation}
          weatherData={weatherData}
          setWeatherData={setWeatherData}
        />
      )}
    </div>
  );
};

export default LocationView;
