import React from "react";
import { shallow } from "enzyme";
import Edit from "./Edit";

describe("Edit", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Edit />);
    expect(wrapper).toMatchSnapshot();
  });
});
