import React, { Component } from "react";
import "./BrandFilter.scss";
import { brands } from "../data/brands";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.handleSelectBox = this.handleSelectBox.bind(this);
    this.state = {
      brands_: brands,
    };
  }
  //react life-cyle method
  componentDidMount() {
    this.setState({
      brands_: brands,
    });
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };
  handleSelectBox = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    if (this.selectedCheckboxes.has(name)) {
      this.selectedCheckboxes.delete(name);
    } else {
      this.selectedCheckboxes.add(name);
    }
  };
  print = () => {
    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }
  };
  render() {
    return (
      <div className="col-lg-3">
        <div className="row">
          <div className="col-15">
            <div className="card mb-3">
              <div className="card-header">
                <h3>Categories</h3>
                <button onClick={this.print}>Show</button>
              </div>
              <ul className="list-group flex-row flex-wrap">
                {brands.map((brand) => (
                  <li className="list-group-item flex-50">
                    <label className="custom-checkbox text-capitalize">
                      {" "}
                      {brand}
                      <input
                        type="checkbox"
                        name={brand}
                        className="custom-checkbox__input"
                        onInput={this.handleSelectBox}
                      />
                      <span className="custom-checkbox__span"></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterBar;
