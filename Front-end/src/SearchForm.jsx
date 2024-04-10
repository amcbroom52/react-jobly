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

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(inputValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
