import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobCardList from "../jobs/JobCardList";
import LoadingScreen from "../common/LoadingScreen";
import ErrorPage from "../common/ErrorPage";
import { v4 as uuid } from 'uuid';
import "./CompanyDetail.css";

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

function CompanyDetail({applyToJob}) {
  const [company, setCompany] = useState({
    data: null,
    isLoading: true
  });
  const [errors, setErrors] = useState([]);
  console.log("in rendering CompanyDetail");


  const { handle } = useParams();
  console.log("handle", handle);

  useEffect(function fetchCompanyOnMount() {
    async function fetchCompany() {
      console.log("in useEffect CompanyDetail");
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany({
          data: company,
          isLoading: false
        });
      } catch (err) {
        setErrors(err);
        console.log("err", err);
      }

    }
    fetchCompany();
  }, []);

  if (errors.length > 0) return <ErrorPage errors={errors} />;
  if (company.isLoading) return <LoadingScreen />;

  return (
    <div className="col-9 CompanyDetail">
      <h3>{company.data.name}</h3>
      <h5>{company.data.description}</h5>
      <JobCardList jobs={company.data.jobs} applyToJob={applyToJob}/>
      {errors.map(e => <Alert key={uuid()} text={e} type="danger" />)}
    </div>
  );
}

export default CompanyDetail;
