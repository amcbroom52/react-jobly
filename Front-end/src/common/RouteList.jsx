import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import CompanyDetail from '../companies/CompanyDetail';
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';
import NotFound from './NotFound';
import LoginForm from '../user/LoginForm';
import SignupForm from '../user/SignupForm';
import ProfileForm from '../user/ProfileForm';

/** Component to hold all routes.
 *
 * State:
 * - login(): fn to call in parent
 * - signup(): fn to call in parent
 *
 * Props: none
 *
 * App -> RouteList -> {HomePage, CompanyList, CompanyDetail, JobList}
 */


function RouteList({login, signup}) {
    console.log("in rendering RouteList");

    return (
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/companies' element={<CompanyList />}/>
            <Route path='/companies/:handle' element={<CompanyDetail />}/>
            <Route path='/jobs' element={<JobList />}/>
            <Route path='/login' element={<LoginForm loginUser={login}/>} />
            <Route path='/signup' element={<SignupForm signupUser={signup}/>} />
            <Route path='/profile' element={<ProfileForm />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default RouteList;