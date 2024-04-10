import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import CompanyDetail from '../companies/CompanyDetail';
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';
import NotFound from './NotFound';

/** Component to hold all routes.
 *
 * State: none
 *
 * Props: none
 *
 * App -> RouteList -> {HomePage, CompanyList, CompanyDetail, JobList}
 */


function RouteList() {
    console.log("in rendering RouteList");

    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/companies' element={<CompanyList />}/>
            <Route path='/companies/:handle' element={<CompanyDetail />}/>
            <Route path='/jobs' element={<JobList />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default RouteList;