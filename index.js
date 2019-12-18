//console.log(document.title);
//console.log(document.all);
document.title = "Fruits & Vegetables Corp";

const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Fruits & Vegetables Corp";
h1.style.color = "red";

const link = document.body.getElementsByTagName("a")[2];
link.innerHTML = "Vegetables";
link.setAttribute("href", "#vegetables");
