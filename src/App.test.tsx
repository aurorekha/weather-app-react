import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import LocationView from "./components/LocationView/LocationView";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {

  it("should contain LocationView", () => {
    const wrapper = mount(<App />);

    wrapper.containsMatchingElement(
      <LocationView
        geoLocation={{}}
        updateGeolocation={{}}
        weatherData={{}}
        setWeatherData={{}}
      />
    );
  });
});
