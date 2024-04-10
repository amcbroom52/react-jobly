import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

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
  const [company, setCompany] = useState({
    data: null,
    isLoading: true
  });

  const { handle } = useParams();

  useEffect(function fetchCompanyOnMount() {
    async function fetchCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany({
        data: company,
        isLoading: false
      });
    }
    fetchCompany();
  }, []);

  if(company.isLoading) return <h2>Loading...</h2>

  return (
    <div>
      <h3>{company.data.name}</h3>
      <h5>{company.data.description}</h5>
      <JobCardList jobs={company.data.jobs}/>
    </div>
  );
}

export default CompanyDetail;
