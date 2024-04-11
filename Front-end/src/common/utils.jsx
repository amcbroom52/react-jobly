const SalaryFormatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

function setLocalUser(token, username) {
  localStorage.setItem("token", token);
  localStorage.setItem("username", username);
}
function getLocalUser() {
  return {
  token: localStorage.getItem("token"),
  username: localStorage.getItem("username")
  }
}

export {SalaryFormatter, setLocalUser, getLocalUser};