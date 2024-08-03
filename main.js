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
  const pages = document.query
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

  //we are also creating cards dynamically here so that we can get to display it
  const div = document.createElement("div");
  console.log(div.textContent);
  const name = document.createElement("div");
  const pages = document.createElement("div");
  const read = document.createElement("div");

  const button = document.createElement("button");
  div.className = "card";
  name.textContent = title;
  name.className = "title"
  console.log(name.textContent);
  // button.textContent = "Remove";
  button.className = "Remove";
  div.dataset.index = myLibrary.findIndex(x => x.title == title);
  console.log(div.dataset.index);

  div.append(name, button)
  container.appendChild(div);
  console.log(document.querySelectorAll(".card")[0].textContent);
  button.addEventListener("click", function (event) {
    console.log("remove is added");
    console.log(event.target.parentNode.getAttribute('data-index'));
    var i = event.target.parentNode.getAttribute('data-index');

    console.log(myLibrary.splice(i, 1));
    // updateIndex(document.querySelectorAll(".card"));
    // console.log(div.dataset.index);
    div.parentNode.removeChild(div);
    console.log(myLibrary);
    updateIndex(document.querySelectorAll(".title"));



  });

}
function updateIndex(cards) {
  console.log(cards)


  cards.forEach(element => {
    element.parentNode.dataset.index = myLibrary.findIndex(x => x.title == element.innerText);
  });



}