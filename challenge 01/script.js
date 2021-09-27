
let count = 0;

function increment() {
  count = count + 1;

  let element = document.getElementById("count-el");
  console.log(element);
  element.innerText = count;
}

function save() {
  console.log(count);
  let element = document.getElementById("save-el");
  element.innerText+=`${count}, `;
  count = 0;
}

let name = "Anne";
let message = `Welcome back ${name}!`;
let welcomeElement = document.getElementById("welcome-el");
welcomeElement.innerText = message;