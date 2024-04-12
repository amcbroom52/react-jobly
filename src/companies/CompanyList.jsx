import { useContext, useEffect, useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";
import CompanyCardList from "./CompanyCardList";
import LoadingScreen from "../common/LoadingScreen";
import PaginationButton from "../common/PaginationButton";
import { v4 as uuid } from 'uuid';
import "./CompanyList.css";

const CARDS_PER_PAGE = 20;

/** Component for searching and rendering list of company cards.
 *
 * State:
 * - companies: {data: [company...], isLoading}
 * - searchQuery
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
  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(document.location));
  const [pageNum, setPageNum] = useState(Number(searchParams.get("page")) || 1);
  const [errors, setErrors] = useState([]);

  console.log("in rendering CompanyList");

  useEffect(function fetchCompaniesOnMount() {
    fetchCompanies();
    console.log("in useEffect CompanyList");
  }, []);

  /** Takes query string, fetches companies, and set companies. */
  async function fetchCompanies(query = "") {
    try {
      const companies = await JoblyApi.getCompanies(query);
      setCompanies({
        data: companies,
        isLoading: false,
      });
    } catch (err) {
      setErrors(err);
    } finally {
      setSearchQuery(query.trim());
    }
  }

  function getPrevPage() {
    setSearchParams({ page: pageNum - 1 });
    setPageNum((pageNum) => pageNum - 1);
  }

  function getNextPage() {
    setSearchParams({ page: pageNum + 1 });
    setPageNum((pageNum) => pageNum + 1);
  }

  if (companies.isLoading) return <LoadingScreen />;

  const lastPage = Math.ceil(companies.data.length / CARDS_PER_PAGE);

  return (
    <div className="CompanyList col-10">
      <SearchForm handleSearch={fetchCompanies} />

      <h1 className="CompanyList-header">
        {searchQuery ? `Search Results for '${searchQuery}'` : "All Companies"}
      </h1>

      <div>
        {companies.data.length !== 0 && pageNum <= lastPage
          ? (
            <CompanyCardList
              companies={companies.data.slice(
                CARDS_PER_PAGE * (pageNum - 1),
                CARDS_PER_PAGE * pageNum
              )}
            />
          ) : (
            <h3>Sorry, no results found!</h3>
          )}
      </div>
      <div className="CompanyList-page-btns">
        <PaginationButton
          getPage={getPrevPage}
          text="Previous page"
          disabled={pageNum <= 1}
        />
        <PaginationButton
          getPage={getNextPage}
          text="Next page"
          disabled={pageNum >= lastPage}
        />
      </div>
      {errors.map(e => <Alert key={uuid()} text={e} type="danger" />)}
    </div>
  );
}

export default CompanyList;
