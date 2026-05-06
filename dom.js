//! DOM SELECTORS : - 5 types

//! 1) document.getElementById()
// const h1Tag = document.getElementById("head");
// console.log(h1Tag);
// console.log(h1Tag.textContent);
// h1Tag.style.backgroundColor = "red";
// h1Tag.style.color = "white";

//! 2) document.getElementsByClassName()
// const elements = document.getElementsByClassName("card");
// console.log(elements); // HTMLCollection(2) [div.card, div.card]
// console.log(elements[0].textContent);
// elements[1].style.backgroundColor = "yellow";
// elements[1].style.color = "orange";

//! 3) document.getElementsByTagName()
// const articleElements = document.getElementsByTagName("article");
// console.log(articleElements); // HTMLCollection(2) [article, article]

//! 4) document.querySelector("article, .card , #head")
// priority ==>  1)id  2)class 3)tagname
// querySelector() will always returns single HTMLElement's object

// const ele1 = document.querySelector("article, .card , #head");
// console.log(ele1);

//! 5) document.querySelectorAll("article, .card , #head")
// priority ==>  1)id  2)class 3)tagname
// querySelectorAll() will always returns NodeList[] consists of HTMLElements

// let ele2 = document.querySelectorAll("article, .card , #head");
// console.log(ele2);
// NodeList(5) [h1#head, div.card, div.card, article, article]

//! HTMLCollection VS NodeList
/**
 
 * 1) HTMLCollection is a return value of getElementsByClassName() and getElementsByTagname()

 * 2) NodeList is a return value of querySelectorAll()

 *! SIMILARITY
 * Both are array-like object (impure array),we cannot use any array methods on impure array

 *! DIFFERENCE
 * we can use only forEach() in NodeList whereas we cannot use any array methods on HTMLCollection
 
 * HTMLCollection is known as Live Collection whereas NodeList is known as Static Collection 

 */

// const collection = document.getElementsByTagName("article");
// const list = document.querySelectorAll("article");

// console.log(collection); // HTMLCollection(2) [article, article]
// console.log(list); // NodeList(2) [article, article]

// //! check array is pure or impure using Array.isArray()
// console.log(Array.isArray(collection)); // false
// console.log(Array.isArray(list)); // false

// //! convert impure array to pure using Array.from()
// const pureCollection = Array.from(collection);
// const pureList = Array.from(list);

// console.log(pureCollection); // [article, article]
// console.log(pureList); // [article, article]

// console.log(Array.isArray(pureCollection)); // true
// console.log(Array.isArray(pureList)); // true

//! DIFFERENCE
// const collection1 = document.getElementsByTagName("article");
// const list1 = document.querySelectorAll("article");

// console.log(collection1);
// console.log(list1);

// //! 1) can use forEach in NodeList
// list1.forEach((ele) => {
//   console.log(ele);
// });

//! 2) HTMLCollection -> Live collection , NodeList -> Static Collection
// const collection2 = document.getElementsByTagName("article");
// const list2 = document.querySelectorAll("article");

// console.log("Collection", collection2.length);// 2
// console.log("List", list2.length);// 2

// //! dynamically creating html elements
// const articleTag = document.createElement("article")
// articleTag.textContent = "Hello World"
// console.log(articleTag);
// document.body.appendChild(articleTag)

// console.log("Collection", collection2.length);// 3 Live
// console.log("List", list2.length);// 2 Static

//! DOM EVENTS: actions performed by the user
// onclick, ondblclick, onmouseenter, onmouseleave, onmousemove, onkeydown, onkeyup, onchange, onscroll, onload, onsubmit

//! There are 2 ways to apply event on HTML elements
//1) using event attribute
//2) using addEventListener() method <--- (MOST USED)

//! example of using event attribute
function singleclick() {
  alert("button clicked");
}

function doubleclick() {
  alert("double clicked");
}

//! example of using addEventListner()

//--> syntax => element.addEventListener("event",callback,useCapture)

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  console.log("HIIII");
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("dblclick", () => {
  console.log("Double Clicked");
});

//! RAINBOW TASK
// const sectionList = document.querySelectorAll("section");

// sectionList.forEach((ele) => {
//   ele.addEventListener("mouseenter", () => {
//     ele.style.backgroundColor = ele.textContent;
//   });

//   ele.addEventListener("mouseleave", () => {
//     ele.style.backgroundColor = "white";
//   });
// });

//! FORM SUBMISSION
const signupFormTag = document.querySelector("#signup-form");

signupFormTag.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page reload
  console.log("Form Submitted");

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const newUser = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim().toLowerCase(),
    password: passwordInput.value,
  };

  console.log(newUser);

  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
