import React from "react";
import { act } from "react-dom/test-utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LocationView from "./LocationView";
import { handleGeoLocationSearch } from "../../helpers/index";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  geoLocation: [
    {
      display_name: "London, Greater London, England, SW1A 2DX, United Kingdom",
      lat: "51.5073219",
      lon: "-0.1276474",
      type: "city",
    },
  ],
  updateGeolocation: {},
  weatherData: {},
  setWeatherData: {},
};
describe("LocationView", () => {
  it("should click on the location to show the new component", async () => {
    const component = mount(<LocationView {...props} />);
    console.log(component.debug());
    const preventDefault = jest.fn();
    handleGeoLocationSearch();

    act(() => {
      component
        .find('[data-testid="submit-form"]')
        .first()
        .simulate("click", { preventDefault });
    });
    expect(preventDefault).toHaveBeenCalledTimes(1);

    component.update();

    expect(component.find('[data-testid="weather-table"]')).toHaveLength(1);
  });
});
