// const title = document.querySelector("#title");
// console.log(title.value);
const submit = document.querySelector("button");
const myLibrary = [];
const container = document.querySelector(".container");
let count = 0;

function Book(title) {
  this.title = title;
  // the constructor...
}

function addBookToLibrary(title) {

  // basically i get data from a form 
  // i need to push this data in myLibrary

  const Book1 = new Book(title);
  myLibrary.push(Book1);


  // I need to display it in cards ;
  const div = document.createElement("div");
  const button = document.createElement("button");
  div.className = "card";
  div.textContent = "title: " + title;
  button.textContent = "Remove";
  button.className = "Remove";
  div.dataset.index = count++;
  console.log(div.dataset.index);
  div.appendChild(button);
  container.appendChild(div);


  const remove = document.querySelector(".Remove");

  remove.addEventListener("click", function () {
    console.log("removed");
  });



  // do stuff here
}
submit.addEventListener("click", function (e) {
  const title = document.querySelector("#title");
  addBookToLibrary(title.value);
  console.log(myLibrary);

  e.preventDefault();



});
