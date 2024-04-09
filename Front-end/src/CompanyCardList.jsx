import CompanyCard from "./CompanyCard"

/** Component to render list of company cards.
 *
 * State: none
 *
 * Props:
 * - companies: [{ handle, name, description, numEmployees, logoUrl }...]
 *
 * CompanyList -> CompanyCardList -> CompanyCard
 */

function CompanyCardList({ companies }) {
    return (
        <div>
          {companies.map((c) => {
            <CompanyCard key={c.id} job={j} />;
          })}
        </div>
      );
}

export default CompanyCardList;