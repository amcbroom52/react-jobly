import { useEffect } from "react";
import JoblyApi from "./api";

/** Component for searching and rendering list of job cards.
 *
 * State:
 * - searchResult: {data: [job...], isLoading}
 *
 * Props: none
 *
 * RouteList -> JobList -> {JobCardsList, SearchForm}
 */

function JobList() {
    useEffect(function fetchJobsOnMount() {
        fetchJobs();
    }, []);

    async function fetchJobs(query='') {
        const jobs = await JoblyApi.getJobs(query);
        console.log(jobs);
    }


    return (
        <div>
            <h1>JobList</h1>
        </div>
    )
}

export default JobList;