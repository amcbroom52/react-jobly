import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "../api/api";
import LoadingScreen from "../common/LoadingScreen";
import { v4 as uuid } from 'uuid';
import "./JobList.css";
import Alert from "../common/Alert";
import PaginationButton from "../common/PaginationButton";

const CARDS_PER_PAGE = 20;

/** Component for searching and rendering list of job cards.
 *
 * State:
 * - jobs: {data: [job...], isLoading}
 * - searchQuery
 *
 * Props: none
 *
 * RouteList -> JobList -> {JobCardsList, SearchForm}
 */

function JobList({ applyToJob }) {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(document.location));
  const [pageNum, setPageNum] = useState(Number(searchParams.get("page")) || 1);
  const [errors, setErrors] = useState([]);
  console.log("in rendering JobList");

  useEffect(function fetchJobsOnMount() {
    fetchJobs(searchQuery);
    console.log("in useEffect JobList");
  }, []);

  /** Takes query string, fetches jobs, and set jobs. */
  async function fetchJobs(query = "") {
    try {
      const jobs = await JoblyApi.getJobs(query);
      setJobs({
        data: jobs,
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

  if (jobs.isLoading) return <LoadingScreen />;

  const lastPage = Math.ceil(jobs.data.length / CARDS_PER_PAGE);

  return (
    <div className="JobList col-10">
      <SearchForm handleSearch={fetchJobs} />
      <h1 className="JobList-title">
        {searchQuery ? `Search Results for '${searchQuery}'` : "All Jobs"}
      </h1>

      <div>
        {jobs.data.length !== 0 && pageNum <= lastPage ? (
          <JobCardList
            jobs={jobs.data.slice(
              CARDS_PER_PAGE * (pageNum - 1),
              CARDS_PER_PAGE * pageNum
            )}
            applyToJob={applyToJob} />
        ) : (
          <h3 className="JobList-NotFound">Sorry, no results found!</h3>
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

export default JobList;
