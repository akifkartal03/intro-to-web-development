import React, { useState, useEffect } from "react";
import Products from "./RecipeList";
const Recipies = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    setBrands(getBrands);
  }, []);
  const handleSelectBox = (e) => {
    const name = e.target.name;
    console.log(name);
  };
  return (
    <React.Fragment>
      <div className="container" style={{ paddingTop: "2rem", marginLeft: 70 }}>
        <div className="row">
          <div className="col-lg-3">
            <div className="row">
              <div className="col-15">
                <div className="card mb-3">
                  <div className="card-header">
                    <h3>Categories</h3>
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
                            id = 'checkbox'
                            className="custom-checkbox__input"
                            onInput={handleSelectBox}
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
          <Products categories={brands} />
        </div>
      </div>
    </React.Fragment>
  );
};
function getBrands() {
  return [
    "Beef",
    "Breakfast",
    "Chicken",
    "Dessert",
    "Goat",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];
}
export default Recipies;
