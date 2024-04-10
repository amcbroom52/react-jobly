import { useEffect, useState } from "react";
import { debounce } from 'lodash'

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

  const debounceLiveSearch = debounce(() => {
    handleSearch(inputValue)
  }, 1000);

  useEffect(function liveSearchOnInputChange() {
    console.log("in useEffect SearchForm");
    debounceLiveSearch();
  }, [inputValue])

  /** Set inputValue. */
  function handleChange(evt) {
    setInputValue(evt.target.value);
    debounceLiveSearch.cancel();
  }


  /** Call parent handleSearch function. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(inputValue);
    setInputValue(inputValue.trim());
    debounceLiveSearch.cancel();
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
