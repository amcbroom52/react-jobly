import CompanyCard from "./CompanyCard";

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
  console.log("in rendering CompanyCardList");

  return (
    <div>
      {companies.map((c) =>
        <CompanyCard key={c.handle} company={c} />
      )}
    </div>
  );
}

export default CompanyCardList;