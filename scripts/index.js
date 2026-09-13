const main = document.querySelector("#main_section");

const title = document.createElement("h1");
title.innerText = "This is a title"

main.appendChild(title);

console.log(`Text of h1 is ${title.innerText}`);

const paragraph = document.createElement("p");
paragraph.innerHTML = `This is an <u>underlined</u> text`;

main.appendChild(paragraph);

console.log(`Text of p is ${paragraph.innerText}`);