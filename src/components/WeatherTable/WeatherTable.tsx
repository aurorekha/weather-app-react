import React from "react";
import moment from "moment";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./WeatherTable.scss";

type WeatherTableProps = {
  weatherData: Array<Object>;
  setWeatherData: Array<Object>;
};

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const WeatherTable = ({ weatherData, setWeatherData }: WeatherTableProps) => {
  const classes = useStyles();
  return (
    <div data-testid="weather-table">
      {weatherData.length > 1 && (
        <div className="weather-card__container">
          <TableContainer component={Paper} data-testid="weather-table">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Day</StyledTableCell>
                  <StyledTableCell align="center">Min Temp</StyledTableCell>
                  <StyledTableCell align="center">Max Temp</StyledTableCell>
                  <StyledTableCell align="center">Description</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {weatherData.map((weather: any, index: number) => {
                  return (
                    <StyledTableRow key={`${index}-weather-card`}>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {moment().add(index, "days").format("ddd MMM DD")}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {weather.temp.min}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {weather.temp.max}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {weather.weather[0].main}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default WeatherTable;
