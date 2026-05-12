const logoutBtn = document.querySelector("#logout-btn");

logoutBtn.addEventListener("click", () => {
  let confirmation = confirm("Are you sure ?");
  if (confirmation) {
    sessionStorage.removeItem("user");
    window.location.href = "login.html";
    alert("logout successfull");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const loginUsernameEle = document.querySelector("#login-username");
  let authUser = JSON.parse(sessionStorage.getItem("user"));
  loginUsernameEle.textContent = authUser.username;
});



// API :- https://dummyjson.com/product