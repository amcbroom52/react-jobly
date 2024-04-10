import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import userContext from "./userContext";

/** Component for Profile edit form
 *
 * props:
 * - updateProfile(): fn to call in parent
 *
 * State: inputValues
 *
 * App -> ProfileForm
 */
function ProfileForm({ updateProfile }) {
  const { user } = useContext(userContext);
  const [inputValues, setInputValues] = useState(user);

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
    updateProfile(inputValues);
  }

  if (!user) return <Navigate to='/'/>

  return (
    <div className="LoginPage">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name='username'
          value={inputValues.username}
          disabled
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
          onChange={handleChange} />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileForm;
