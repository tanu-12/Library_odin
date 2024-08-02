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
submit.addEventListener("click", function (e) {
  const title = document.querySelector("#title");
  addBookToLibrary(title.value);
  console.log(myLibrary);

  e.preventDefault();



});
function addBookToLibrary(title) {

  // basically i get data from a form 
  // i need to push this data in myLibrary

  const Book1 = new Book(title);
  myLibrary.push(Book1);


  // I need to display it in cards ;
  displayCard(title);

}
function displayCard(title) {

  //we are also creating cards dynamically here so that we can get to display 
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
  button.addEventListener("click", function () {
    console.log("remove is added");
    console.log(div.dataset.index);

    console.log(myLibrary.splice(div.dataset.index, 1));

  });

}