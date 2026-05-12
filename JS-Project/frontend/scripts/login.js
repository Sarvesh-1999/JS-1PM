const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  const loginUser = {
    email: email.value,
    password: password.value,
  };

  let allRegisteredUsers = await getRegisteredUsers();

  let authUser = allRegisteredUsers.find((user) => {
    return (
      user.email === loginUser.email && user.password === loginUser.password
    );
  });

  if (authUser) {
    console.log("Login Success");
    sessionStorage.setItem("user", JSON.stringify(authUser));
    window.location.href = "products.html";
    alert("Login Successfull ✅");
  } else {
    console.log("Login Failed");
    alert("Login Failed ❌");
  }
});

async function getRegisteredUsers() {
  try {
    let resp = await fetch("http://localhost:5000/users");
    let data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
