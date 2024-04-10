import { useState } from "react";

/** Component to render search form.
 *
 * State:
 * - inputValue
 *
 * Props:
 * - handleSearch(): function to call in parent
 *
 *  {CompanyList, JobsList} -> SearchForm
 */

function SearchForm({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");
  console.log("in rendering SearchForm");

  /** Set inputValue. */
  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  /** Call parent handleSearch function. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(inputValue.trim());
    setInputValue(inputValue.trim());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter Search Term..."/>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
