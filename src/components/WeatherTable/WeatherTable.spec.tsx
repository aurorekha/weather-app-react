import React from "react";
import axios from "axios";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WeatherTable from "../WeatherTable/WeatherTable";

Enzyme.configure({ adapter: new Adapter() });

const WeatherTableProps = {
  weatherData: [
    {
      temp: {
        min: 1122,
        max: 2222,
      },
      weather: [{ main: "sunny" }],
    },
  ],
  setWeatherData: [{ A: "A", b: "B", c: "c", d: "d" }],
};

describe("WeatherTable", () => {
  it("should check if weatherTable has the right data", () => {
    const wrapper = mount(<WeatherTable {...WeatherTableProps} />);
    expect(wrapper.props().weatherData).toBe(WeatherTableProps.weatherData);
  });
});
