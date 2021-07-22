import React from "react";
import axios from "axios";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LocationSearchResult from "./LocationSearchResult";
import WeatherTable from "../WeatherTable/WeatherTable";

Enzyme.configure({ adapter: new Adapter() });

const LocationSearchResultProps = {
  locationData: [{ A: "A", b: "B" }],
  geoLocation: [{ A: "A", b: "B" }],
  updateGeolocation: [{ A: "A", b: "B" }],
  weatherData: [{ A: "A", b: "B" }],
  setWeatherData: [{ A: "A", b: "B", c: "c", d: "d" }],
};

const WeatherTableProps = {
  weatherData: [],
  setWeatherData: [{ A: "A", b: "B", c: "c", d: "d" }],
};
describe("LocationSearchResult", () => {
  it("should find the WeatherTable component within", () => {
    const wrapper = mount(
      <LocationSearchResult {...LocationSearchResultProps} />
    );
    wrapper.containsMatchingElement(<WeatherTable {...WeatherTableProps} />);
  });
  it("should check if weatherTable has the right props in place", () => {
    const wrapper = mount(<WeatherTable {...WeatherTableProps} />);
    console.log(wrapper.debug());
    expect(wrapper.props().setWeatherData).toBe(
      WeatherTableProps.setWeatherData
    );
  });
});
