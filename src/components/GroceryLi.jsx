// import PropTypes from "prop-types";
import PropTypes from "prop-types";

//  import React from "react";
export default function GroceryLI({ grocery }) {
  return (
    <li key={grocery.id}>
      <input
        type="checkbox"
        id={grocery.id}
        defaultChecked={grocery.purchased}
      />
      <label htmlFor={grocery.id} className="ml-2">
        {grocery.name}
      </label>
    </li>
  );
}
//  Define the props that this component accepts
GroceryLI.propTypes = {
  grocery: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    purchased: PropTypes.bool.isRequired,
  }).isRequired,
};