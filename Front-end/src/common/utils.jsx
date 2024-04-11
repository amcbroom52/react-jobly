/** Returns formatter for salaries. */
const SalaryFormatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/** Sets token in local storage */
function setLocalUser(token, username) {
  localStorage.setItem("token", token);
}

/** Gets token from local storage */
function getLocalUser() {
  return {
    token: localStorage.getItem("token"),
  };
}

// TODO: use jwt-decode library
/** Decodes token payload */
function getTokenPayload(token) {
  return JSON.parse(atob(token.split(".")[1]));
}

export { SalaryFormatter, setLocalUser, getLocalUser, getTokenPayload };
