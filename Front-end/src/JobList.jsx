import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

/** Component for searching and rendering list of job cards.
 *
 * State:
 * - jobs: {data: [job...], isLoading}
 *
 * Props: none
 *
 * RouteList -> JobList -> {JobCardsList, SearchForm}
 */

function JobList() {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(
    function fetchJobsOnMount() {
      fetchJobs(searchQuery);
    },
    [searchQuery]
  );

  /** Takes query string, fetches jobs, and set jobs. */
  async function fetchJobs(query = "") {
    const jobs = await JoblyApi.getJobs(query);
    setJobs({
      data: jobs,
      isLoading: false,
    });
  }

  /** Set jobs and searchQuery. */
  function handleSearch(query) {
    if (searchQuery !== query) {
      setJobs({
        data: null,
        isLoading: true,
      });
      setSearchQuery(query);
    }
  }

  //   if (jobs.isLoading) return <h3>Loading...</h3>;
  if (jobs.isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <h1>
        {searchQuery ? `Search Results for '${searchQuery}'` : "All Jobs"}
      </h1>

      <div>
        <JobCardList jobs={jobs.data} />
      </div>
    </div>
  );
}

export default JobList;
