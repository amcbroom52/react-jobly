import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import JoblyApi from "./api/api";
import { jwtDecode } from "jwt-decode";

function useAuth(initialToken) {
  console.log('in useAuth hook');
  const [token, setToken] = useLocalStorage(initialToken);
  const [user, setUser] = useState();

  useEffect(function getUserData() {
    async function fetchUserData() {
      JoblyApi.token = token;
      const { username } = jwtDecode(token);
      const userData = await JoblyApi.getUser(username);
      setUser({
        username: userData.username,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        jobs: userData.jobs,
        isAdmin: userData.isAdmin,
      });
    }
    if (token) {
      fetchUserData();
    } else {
      setUser(null);
      JoblyApi.token = null;
    }
  }, [token]);

  async function login(username, password) {
    const resp = await JoblyApi.login(username, password);
    setToken(resp.token);
  }

  async function signup(data) {
    const resp = await JoblyApi.signup(inputValues);
    setToken(resp.token);
  }

  async function update(data) {
    const updatedData = await JoblyApi.updateUser(data);
    setUser((user) => ({
      ...user,
      ...updatedData,
    }));
  }

  async function logout() {
    setToken(null);
  }

  return { user, login, signup, update, logout };
}

export default useAuth;