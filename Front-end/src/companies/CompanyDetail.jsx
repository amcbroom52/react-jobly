import { useEffect, useState, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingScreen from "../common/LoadingScreen";
import userContext from "../user/userContext";

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
  const {user} = useContext(userContext);
  console.log("in rendering CompanyDetail");


  const { handle } = useParams();

  useEffect(function fetchCompanyOnMount() {
    async function fetchCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany({
        data: company,
        isLoading: false
      });
      console.log("in useEffect CompanyDetail");

    }
    fetchCompany();
  }, []);

  if (!user) return <Navigate to='/'/>

  if (company.isLoading) return <LoadingScreen />;

  return (
    <div>
      <h3>{company.data.name}</h3>
      <h5>{company.data.description}</h5>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetail;
