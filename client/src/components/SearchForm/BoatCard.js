import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Party Size:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="passengers"
        type="text"
        className="form-control"
        placeholder="Passengers (required)"
        id="search"
      />
      <br />
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
