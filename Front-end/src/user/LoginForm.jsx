import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const INITIAL_STATE = {
    username: '',
    password: ''
}

/** Component for Login form
 *
 * props:
 * - loginUser(): fn to call in parent
 *
 * State: inputValues
 *
 * App -> LoginForm
 */
function LoginForm({loginUser}) {
    const [inputValues, setInputValues] = useState(INITIAL_STATE);
    const navigate = useNavigate();

    /** updates inputValues. */
    function handleChange(evt) {
        setInputValues(inputValues => ({
            ...inputValues,
            [evt.target.name]: evt.target.value
        }));
    }

    /** Calls fn in parent. */
    function handleSubmit(evt) {
        evt.preventDefault();
        loginUser(inputValues.username, inputValues.password);
        navigate('/');
    }

    return (
        <div className="LoginPage">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name='username'
                    value={inputValues.username}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name='password'
                    value={inputValues.password}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>

    )

}

export default LoginForm;