const editForm = document.querySelector("#edit-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

async function getEditUser() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  try {
    let res = await fetch(`http://localhost:5000/users/${user.id}`);
    let data = await res.json();
    username.value = data.username;
    email.value = data.email;
    password.value = data.password;
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("DOMContentLoaded", () => getEditUser());

editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const user = JSON.parse(sessionStorage.getItem("user"));

  const updatedUserData = {
    username: username.value,
    email: email.value,
    password: password.value,
  };

  try {
    let resp = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    });
    window.location.href = "products.html";
    alert("Profile Updated");
  } catch (error) {
    console.log(error);
  }
});
