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
 * we can use only forEach() in HTMLCollection whereas we cannot use any array methods on NodeList
 
 * HTMLCollection is known as Live Collection whereas NodeList is known as Static Collection 

 */

const collection = document.getElementsByTagName("article");
const list = document.querySelectorAll("article");

console.log(collection); // HTMLCollection(2) [article, article]
console.log(list); // NodeList(2) [article, article]

//! check array is pure or impure using Array.isArray()
console.log(Array.isArray(collection)); // false
console.log(Array.isArray(list)); // false

//! convert impure array to pure using Array.from()
const pureCollection = Array.from(collection);
const pureList = Array.from(list);

console.log(pureCollection); // [article, article]
console.log(pureList); // [article, article]

console.log(Array.isArray(pureCollection)); // true
console.log(Array.isArray(pureList)); // true
