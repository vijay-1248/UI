import book from './booksInfo.js'




const ulParentNode = document.createElement('ul');

const liChildNode1 = document.createElement('li');
let bookTitle = document.createTextNode(book.name);
liChildNode1.appendChild(bookTitle);
ulParentNode.appendChild(liChildNode1);


const liChildNode2 = document.createElement('li');
let bookPrice = document.createTextNode(book.price);
liChildNode2.appendChild(bookPrice);
ulParentNode.appendChild(liChildNode2);

const body = document.getElementById('body');

const img = document.createElement('img');
img.setAttribute("src",book.picture);
body.appendChild(img);


console.log(body);
body.appendChild(ulParentNode);