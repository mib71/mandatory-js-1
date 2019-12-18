//console.log(document.title);
//console.log(document.all);
//console.log(document.getElementsByTagName("td"));

document.title = "Fruits & Vegetables Corp";

const h1 = document.getElementsByTagName("h1")[0];
h1.textContent = "Fruits & Vegetables Corp";

const link = document.body.getElementsByTagName("a")[2];
link.textContent = "Vegetables";
link.setAttribute("href", "#vegetables");

const contact = document.getElementById("contact");
let contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";
contact.insertBefore(contactTitle, contact.childNodes[0]);

const about = document.getElementById("about");
let aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About";
about.insertBefore(aboutTitle, about.childNodes[0]);

const paragraph = document.createElement("p");
paragraph.textContent = "We're the best in fruits & vegetables";
about.appendChild(paragraph);

about.childNodes[1].remove();

const tdName = document.getElementsByTagName("td")[0];
const tdEmail = document.getElementsByTagName("td")[1];
let thTagName = document.createElement("th");
thTagName.textContent = "Name";
let thTagEmail = document.createElement("th");
thTagEmail.textContent = "Email";
tdName.replaceWith(thTagName);
tdEmail.replaceWith(thTagEmail);

const head = document.getElementsByTagName("head")[0];
let headLink = document.createElement("link");
headLink.rel = "stylesheet";
headLink.type = "text/css";
headLink.href = "./main.css";
head.appendChild(headLink);

document
  .getElementById("about")
  .parentNode.insertBefore(
    document.getElementById("about"),
    document.getElementById("contact")
  );
