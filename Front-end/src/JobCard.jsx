import './JobCard.css';

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
  return (
    <div className='JobCard'>
      <div>
      <h5>{job.title}</h5>
      <p>{job.companyName}</p>
      </div>
      <div>
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
      </div>
    </div>
  )
}

export default JobCard;