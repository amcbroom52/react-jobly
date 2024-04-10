import { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";
import CompanyCardList from "./CompanyCardList";
import LoadingScreen from "../common/LoadingScreen";

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
  console.log("in rendering CompanyList");

  useEffect(
    function fetchCompaniesOnMount() {
      fetchCompanies();
      console.log("in useEffect CompanyList");
    },
    []
  );

  /** Takes query string, fetches companies, and set companies. */
  async function fetchCompanies(query = "") {
    const companies = await JoblyApi.getCompanies(query);
    setCompanies({
      data: companies,
      isLoading: false,
    });
    setSearchQuery(query.trim());
  }

  if (companies.isLoading) return <LoadingScreen />;

  return (
    <div>
      {/* Why rerender? */}
      <SearchForm handleSearch={fetchCompanies} />

      <h1>
        {searchQuery ? `Search Results for '${searchQuery}'` : "All Companies"}
      </h1>

      <div>
        {companies.data.length !== 0
          ? <CompanyCardList companies={companies.data} />
          : <h3>Sorry, no results found!</h3>}
      </div>
    </div>
  );
}

export default CompanyList;
