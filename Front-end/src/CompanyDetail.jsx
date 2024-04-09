import { useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/** Component for rendering company information.
 *
 * State:
 * - company: {data: { handle, name, description, numEmployees, logoUrl, jobs }, isLoading}
 * where jobs is [{ id, title, salary, equity }, ...]
 *
 * Props: none
 *
 * RouteList -> Company Detail -> JobCardsList
 */

function CompanyDetail() {
  const { handle } = useParams();

  useEffect(function fetchCompanyOnMount() {
    async function fetchCompany() {
      const company = await JoblyApi.getCompany(handle);
      console.log(company);
    }
    fetchCompany();
  });

  return (
    <div>
      <h1>CompanyDetail</h1>
    </div>
  );
}

export default CompanyDetail;
