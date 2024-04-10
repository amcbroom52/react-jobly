import { Link } from "react-router-dom";
import "./CompanyCard.css";

/** Component informational card about company.
 *
 * State: none
 *
 * Props:
 * { handle, name, description, numEmployees, logoUrl }
 *
 * CompanyCardList -> CompanyCard
 */

function CompanyCard({ company }) {
  console.log("in rendering CompanyCard");

  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <div>
          <h3>{company.name}</h3>
          {company.logoUrl &&
            <img
              src={company.logoUrl}
              alt={`Logo for ${company.name}`} />}
        </div>
        <p>{company.description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;;