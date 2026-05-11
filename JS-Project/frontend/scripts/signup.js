const signupForm = document.getElementById("signup-form");
console.log(signupForm);

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const newUser = {
    username: username.value.trim(),
    email: email.value.trim(),
    password: password.value,
  };

  console.log(newUser);

  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then(() => {
      window.location.href = "login.html"; // navigate to login page
      alert("Signup Successfull ✅");
    })
    .catch((err) => {
      alert("Signup Failed ❌");
      console.log(err);
    });
});
