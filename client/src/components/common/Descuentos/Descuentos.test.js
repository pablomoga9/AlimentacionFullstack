import React from "react";
import { shallow } from "enzyme";
import Descuentos from "./Descuentos";

describe("Descuentos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Descuentos />);
    expect(wrapper).toMatchSnapshot();
  });
});
