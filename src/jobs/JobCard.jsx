import "./JobCard.css";
import { SalaryFormatter } from "../common/utils";
import { useContext, useState } from "react";
import userContext from "../user/userContext";
import Alert from "../common/Alert";
import {v4 as uuid} from 'uuid';

/** Component informational card about job.
 *
 * State: none
 *
 * Props:
 * - job: { id, title, salary, equity, companyHandle, companyName }
 *
 * JobCardList -> JobCard
 */

function JobCard({ job, applyToJob }) {
  console.log("in rendering JobCard");
  const { user } = useContext(userContext);
  const [applied, setApplied] = useState(user.jobs && user.jobs.findIndex((id) => id === job.id) != -1);
  const [errors, setErrors] = useState([]);

  async function handleClick() {
    try {
      await applyToJob(user.username, job.id);
      setApplied(true);
    } catch (err) {
      console.log(err);
      setErrors(err);
    }
  }

  return (
    <div className="JobCard card">
      <div className="card-body">
        <div className="JobCard-header">
          <h5 className="card-title">{job.title}</h5>
          <p className="card-subtitle">{job.companyName}</p>
        </div>
        <div className="JobCard-bottom">
          {job.salary && (
            <p className="card-text JobCard-text">
              {" "}
              {`Salary: ${SalaryFormatter.format(job.salary)}`}
            </p>
          )}
          <p className="card-text JobCard-text">Equity: {job.equity}</p>
        </div>
      </div>
      {applied ? (
        <button className="btn btn-primary" disabled>Applied</button>
      ) : (
        <button className="btn btn-primary" onClick={handleClick}>Apply</button>
      )}
      {errors.map(e => <Alert key={uuid()} text={e} type='danger'/>)}
    </div>
  );
}

export default JobCard;
