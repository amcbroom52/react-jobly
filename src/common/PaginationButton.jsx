/** Pagination button.
 *
 * Props:
 * - getPage(): fn to call in parent
 * - text: button text
 *
 * State: none
 *
 * {CompanyList, JobList} -> PaginationButton
 */

function PaginationButton({getPage, text, disabled}) {
    return (
        <button className="btn btn-light" onClick={getPage} disabled={disabled}>{text}</button>
    )
}

export default PaginationButton;