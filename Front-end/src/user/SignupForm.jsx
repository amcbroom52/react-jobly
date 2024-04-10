import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const INITIAL_STATE = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

/** Component for Signup form
 *
 * props:
 * - signupUser(): fn to call in parent
 *
 * State: inputValues
 *
 * App -> SignupForm
 */
function SignupForm({signupUser}) {
  const [inputValues, setInputValues] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  /** updates inputValues. */
  function handleChange(evt) {
    setInputValues((inputValues) => ({
      ...inputValues,
      [evt.target.name]: evt.target.value,
    }));
  }

  /** Calls fn in parent. */
  function handleSubmit(evt) {
    evt.preventDefault();
    signupUser(inputValues);
    navigate('/');
  }

  return (
    <div className="LoginPage">
      <h1>Sign Up</h1>
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
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name='firstName'
          value={inputValues.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name='lastName'
          value={inputValues.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name='email'
          value={inputValues.email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
