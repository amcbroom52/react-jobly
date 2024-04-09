/** Component for searching and rendering list of company cards.
 *
 * State:
 * - searchResult: {data: [company...], isLoading}
 *
 * Props: none
 *
 * RouteList -> CompanyList -> {CompanyCardsList, SearchForm}
 */

import { useEffect } from "react";
import JoblyApi from "./api";

function CompanyList() {

    useEffect(function fetchCompaniesOnMount() {
        fetchCompanies();
    }, []);

    async function fetchCompanies(query='') {
        const companies = await JoblyApi.getCompanies(query);
        console.log(companies);
    }

    async function filterCompanies() {

    }

    return (
        <div>
            <h1>CompanyList</h1>
        </div>
    )
}

export default CompanyList;