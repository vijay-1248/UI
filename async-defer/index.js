const spanNode = document.createElement("span");
const textNode = document.createTextNode("Hello javaScript !!");
spanNode.appendChild(textNode);


const body = document.getElementById("body").appendChild(spanNode);
console.log(body);