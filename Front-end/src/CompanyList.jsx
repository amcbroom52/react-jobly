import { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";

/** Component for searching and rendering list of company cards.
 *
 * State:
 * - companies: {data: [company...], isLoading}
 *
 * Props: none
 *
 * RouteList -> CompanyList -> {CompanyCardsList, SearchForm}
 */

function CompanyList() {
  const [companies, setCompanies] = useState({
    data: null,
    isLoading: true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(
    function fetchCompaniesOnMount() {
      fetchCompanies(searchQuery);
    },
    [searchQuery]
  );

   /** Takes query string, fetches companies, and set companies. */
  async function fetchCompanies(query = "") {
    const companies = await JoblyApi.getCompanies(query);
    setCompanies({
      data: companies,
      isLoading: false,
    });
  }

  /** Set jobs and searchQuery. */
  function handleSearch(query) {
    if (searchQuery !== query) {
      setCompanies({
        data: null,
        isLoading: true,
      });
      setSearchQuery(query);
    }
  }

  if (companies.isLoading) return <h3>Loading...</h3>;

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />

      <h1>
        {searchQuery ? `Search Results for '${searchQuery}'` : "All Companies"}
      </h1>

      <div>
        <CompanyCardList companies={companies.data} />
      </div>
    </div>
  );
}

export default CompanyList;
