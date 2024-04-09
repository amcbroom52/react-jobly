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
  [inputValue, setInputValue] = useState("");

  function handleChange(evt) {
    setInputValue(evt.target.value);
  }

  function handleClick(evt) {
    evt.preventDefault();
    handleSearch(inputValue);
  }

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button onClick={handleClick}>Search</button>
    </form>
  );
}

export default SearchForm;
