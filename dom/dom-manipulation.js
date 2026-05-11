//! HOW TO CREATE HTML ELEMENTS
// document.createElement()
const h1Tag = document.createElement("h1");
const divTag = document.createElement("div");

//! HOW TO ADD TEXT CONTENT
h1Tag.textContent = "Hello <em>World</em>";
divTag.innerHTML = "I am <em>div</em>";

console.log(h1Tag);
console.log(divTag);

//! HOW TO DISPLAY ELEMENT ON UI :
//? 1)appendChild(node1)
//? 2)append(node1, node2)
//? 3)prepend(node1, node2)

// document.body.appendChild(h1Tag)
// document.body.appendChild(divTag)

// document.body.append(h1Tag, divTag);

document.body.prepend(h1Tag, divTag);

//! CREATE A TABLE USING DOM
const tableTag = document.createElement("table");

const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");

const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const td4 = document.createElement("td");

tableTag.border = "1"; // attribute
tableTag.cellPadding = 10; // attribute
tableTag.cellSpacing = 0; // attribute

td1.textContent = "A"; // table data
td2.textContent = "B"; // table data
td3.textContent = "C"; // table data
td4.textContent = "D"; // table data

tr1.append(td1, td2); // table row
tr2.append(td3, td4); // table row

tableTag.append(tr1, tr2);

document.body.append(tableTag);

//! CREATE AN IMAGE TAG
const imgTag = document.createElement("img");
const anchorTag = document.createElement("a");

anchorTag.textContent = "Myntra";

//! add attibutes using property
imgTag.src ="https://img.magnific.com/premium-vector/blue-car-flat-style-illustration-isolated-white-background_108231-795.jpg?semt=ais_hybrid&w=740&q=80";
imgTag.alt = "Car";

//! add attributes using methods
anchorTag.setAttribute("href", "https://www.myntra.com");
imgTag.setAttribute("class", "carImage");

document.body.append(anchorTag, imgTag);
