import React from "react";
import ReactDOM from "react-dom";
import AllRecipies from "./AllRecipies";
import Footer from "./Footer";
import Header from "./Header";
import Show from "./ShowRecipies";
import Enzyme from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });
describe("App", () => {
  it("renders without crashing", () => {
    const component = mount(<AllRecipies />);
    expect(component).toMatchSnapshot();
  });
  it("has checkbox", () => {
    const component = mount(<AllRecipies />);
    expect(component.exists("input#checkbox")).toBe(true);
  });
  it("has container", () => {
    const component = mount(<Footer />);
    expect(component.exists("Container#container")).toBe(true);
  });
  it("has navbar", () => {
    const component = mount(<Header />);
    expect(component.exists("Navbar#navbar")).toBe(true);
  });
});
