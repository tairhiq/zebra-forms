// JS scripts placed here
const myButton = document.getElementById("intro");
const myButton2 = document.getElementById("submit");
console.log(myButton);
console.log(myButton2);

const element = document.getElementsByTagName("p");
console. log(element);

const y = document.querySelector(".logo")
consol.log(y);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }