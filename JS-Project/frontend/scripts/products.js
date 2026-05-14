const logoutBtn = document.querySelector("#logout-btn");
const productsContainer = document.querySelector(".products-container");
const deleteBtn = document.querySelector("#delete-btn");
const editBtn = document.querySelector("#edit-btn");

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

async function getProducts() {
  try {
    let res = await fetch("https://dummyjson.com/product");
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function displayProducts() {
  let data = await getProducts();
  console.log(data);

  data.products.map((ele) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
    <img src='${ele.thumbnail}' alt='${ele.title}'>
    <h3>${ele.title}</h3>
    <p>${ele.description.slice(0, 50)}...</p>
    <p> Rs.${ele.price} </p>
    <button>Add to cart</button>
    `;
    productsContainer.append(productDiv);
  });
}
displayProducts();

deleteBtn.addEventListener("click", async () => {
  const confirmationMsg = confirm("Are you sure?");

  if (confirmationMsg) {
    const authuser = JSON.parse(sessionStorage.getItem("user"));
    await fetch(`http://localhost:5000/users/${authuser.id}`, {
      method: "DELETE",
    });
    sessionStorage.removeItem("user");
    window.location.href = "signup.html";
    alert("Account deleted");
  }
});

editBtn.addEventListener("click", () => {
  window.location.href = "edit.html";
});
