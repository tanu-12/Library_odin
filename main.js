// const title = document.querySelector("#title");
// console.log(title.value);
const submit = document.querySelector("button");
const myLibrary = [];
const container = document.querySelector(".container");
var read = document.querySelector("#read");
const add = document.querySelector("h2");
const dialog = document.querySelector("dialog");
add.addEventListener("click", function () {
  dialog.showModal();
})

let count = 0;

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // the constructor...
}

function displayCard(title, author, pages) {

  //we are also creating cards dynamically here so that we can get to display it
  const div = document.createElement("div");
  console.log(div.textContent);
  const name = document.createElement("div");
  const page = document.createElement("div");
  const Author = document.createElement("div");

  const button = document.createElement("button");
  div.className = "card";
  name.textContent = title;
  Author.textContent = author;
  page.textContent = pages;
  name.className = "title"
  console.log(name.textContent);
  button.textContent = "Remove";
  button.className = "Remove";
  div.dataset.index = myLibrary.findIndex(x => x.title == title);
  console.log(div.dataset.index);

  div.append(name, Author, page, button)
  container.appendChild(div);
  // console.log(document.querySelectorAll(".card")[0].textContent);
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


  var readBtn = document.createElement("button");
  readBtn.className = ""
  if (read.checked) {
    readBtn.style.backgroundColor = "green";
    readBtn.textContent = "Read";

  }
  else {
    readBtn.style.backgroundColor = "red";
    readBtn.textContent = "Not Read";
  }
  readBtn.value = read.checked;
  console.log(readBtn.value);



  div.append(readBtn);


  readBtn.addEventListener("click", function (e) {
    if (e.target.value == "false") {
      console.log("checking");

      e.target.style.backgroundColor = "green";
      readBtn.textContent = "Read";
      e.target.value = "true";
    }
    else if (e.target.value) {

      readBtn.style.backgroundColor = "red";
      readBtn.textContent = "Not Read";
      e.target.value = "false";
    }




  });

}
submit.addEventListener("click", function (e) {
  dialog.close();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  addBookToLibrary(title.value, author.value, pages.value);
  console.log(myLibrary);


  e.preventDefault();
  document.getElementById("myForm").reset();



});

function addBookToLibrary(title, author, pages) {

  // basically i get data from a form 
  // i need to push this data in myLibrary

  const Book1 = new Book(title, author, pages);
  myLibrary.push(Book1);


  // I need to display it in cards ;
  displayCard(title, author, pages);

}
function updateIndex(cards) {
  console.log(cards)


  cards.forEach(element => {
    element.parentNode.dataset.index = myLibrary.findIndex(x => x.title == element.innerText);
  });



}