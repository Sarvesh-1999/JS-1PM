const section = document.querySelector("section");
const article = document.querySelector("article");
const div = document.querySelector("div");

section.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("section");
  section.style.backgroundColor = "orange";
} , 0);

article.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("article");
  article.style.backgroundColor = "orangered";
} , 0);

div.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("div");
  div.style.backgroundColor = "yellow";
} , 0);

div.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    console.log("Div 1");
})

div.addEventListener("click",()=>{
    console.log("Div 2");
})
