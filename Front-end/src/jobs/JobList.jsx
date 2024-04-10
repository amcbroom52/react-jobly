import { useEffect, useState } from "react";
import SearchForm from "../common/SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "../api/api";
import LoadingScreen from "../common/LoadingScreen";

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

function JobList() {
  const [jobs, setJobs] = useState({
    data: null,
    isLoading: true,
  });
  const [searchQuery, setSearchQuery] = useState("");
  console.log("in rendering JobList");

  useEffect(
    function fetchJobsOnMount() {
      fetchJobs(searchQuery);
      console.log("in useEffect JobList");
    },
    []
  );

  /** Takes query string, fetches jobs, and set jobs. */
  async function fetchJobs(query = "") {
    const jobs = await JoblyApi.getJobs(query);
    setJobs({
      data: jobs,
      isLoading: false,
    });
    setSearchQuery(query.trim());
  }

  //   if (jobs.isLoading) return <h3>Loading...</h3>;
  if (jobs.isLoading) return <LoadingScreen />;

  return (
    <div>
      <SearchForm handleSearch={fetchJobs} />
      <h1>
        {searchQuery ? `Search Results for '${searchQuery}'` : "All Jobs"}
      </h1>

      <div>
        {jobs.data.length !== 0
          ? <JobCardList jobs={jobs.data} />
          : <h3>Sorry, no results found!</h3>}
      </div>
    </div>
  );
}

export default JobList;
