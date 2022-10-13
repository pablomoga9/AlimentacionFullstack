import React from "react";
import { shallow } from "enzyme";
import StoreCard from "./StoreCard";

describe("StoreCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StoreCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
