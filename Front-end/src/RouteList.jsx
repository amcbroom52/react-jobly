import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import CompanyDetail from './CompanyDetail';
import CompanyList from './CompanyList';
import JobList from './JobList';

/** Component to hold all routes.
 *
 * State: none
 *
 * Props: none
 *
 * App -> RouteList -> {HomePage, CompanyList, CompanyDetail, JobList}
 */

// TODO: for 404 w *

function RouteList() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/companies' element={<CompanyList />}/>
            <Route path='/companies/:handle' element={<CompanyDetail />}/>
            <Route path='/jobs' element={<JobList />}/>
        </Routes>
    )
}

export default RouteList;