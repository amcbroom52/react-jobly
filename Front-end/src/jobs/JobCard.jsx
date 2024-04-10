import './JobCard.css';
import { SalaryFormatter } from '../common/utils';

/** Component informational card about job.
 *
 * State: none
 *
 * Props:
 * - job: { id, title, salary, equity, companyHandle, companyName }
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  console.log("in rendering JobCard");

  return (
    <div className='JobCard'>
      <div>
        <h5>{job.title}</h5>
        <p>{job.companyName}</p>
      </div>
      <div>
        {job.salary &&
          <p> {`Salary: ${SalaryFormatter.format(job.salary)}`}</p>}
        <p>Equity: {job.equity}</p>
      </div>
    </div>
  );
}

export default JobCard;