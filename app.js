const del = document.querySelector(".dell");
const input = document.querySelector("#input");
let inVal = input.value;
del.onclick = () => {
  input.value = input.value.slice(0, input.value.length - 1);
};
const teng = document.querySelector(".teng");
const plus = document.querySelector(".plus");
const mins = document.querySelector(".mins");
const kop = document.querySelector(".kop");
const bol = document.querySelector(".bol");
const butun = document.querySelector(".butun");

teng.addEventListener("click", () => {
  if (input.value) {
    input.value = eval(input.value);
  } else {
    input.value = "";
  }
});
plus.onclick = () => {
  if (
    input.value[input.value.length - 1] == "+" ||
    input.value[input.value.length - 1] == "-" ||
    input.value[input.value.length - 1] == "*" ||
    input.value[input.value.length - 1] == "/" ||
    input.value[input.value.length - 1] == "."
  ) {
    input.value += "";
  } else if (input.value) {
    input.value += "+";
  } else {
    input.value = "";
  }
};
mins.onclick = () => {
  if (
    input.value[input.value.length - 1] == "+" ||
    input.value[input.value.length - 1] == "-" ||
    input.value[input.value.length - 1] == "*" ||
    input.value[input.value.length - 1] == "/" ||
    input.value[input.value.length - 1] == "."
  ) {
    input.value += "";
  } else if (input.value) {
    input.value += "-";
  } else {
    input.value = "";
  }
};
kop.onclick = () => {
  if (
    input.value[input.value.length - 1] == "+" ||
    input.value[input.value.length - 1] == "-" ||
    input.value[input.value.length - 1] == "*" ||
    input.value[input.value.length - 1] == "/" ||
    input.value[input.value.length - 1] == "."
  ) {
    input.value += "";
  } else if (input.value) {
    input.value += "*";
  } else {
    input.value = "";
  }
};
bol.onclick = () => {
  if (
    input.value[input.value.length - 1] == "+" ||
    input.value[input.value.length - 1] == "-" ||
    input.value[input.value.length - 1] == "*" ||
    input.value[input.value.length - 1] == "/" ||
    input.value[input.value.length - 1] == "."
  ) {
    input.value += "";
  } else if (input.value) {
    input.value += "/";
  } else {
    input.value = "";
  }
};
butun.onclick = () => {
  if (
    input.value[input.value.length - 1] == "+" ||
    input.value[input.value.length - 1] == "-" ||
    input.value[input.value.length - 1] == "*" ||
    input.value[input.value.length - 1] == "/" ||
    input.value[input.value.length - 1] == "."
  ) {
    input.value += "";
  } else if (input.value) {
    input.value += ".";
  } else if (!input.value) {
    input.value = "0.";
  }
};

// mod versiya bilan ishlash

const modLink = document.querySelector("#mod")
const mod1 = document.querySelector(".mod1")
const mod2 = document.querySelector(".mod2")
const mod3 = document.querySelector(".mod3")
const activ1 = document.querySelector("#activ1")
const activ2 = document.querySelector("#activ2")
const activ3 = document.querySelector("#activ3")


// mod versiyani function larioni yozamiz
function rem(){
  activ1.classList.remove("active")
  activ2.classList.remove("active")
  activ3.classList.remove("active")
}
mod1.onclick = () => {
  modLink.setAttribute("href" , "styles/main.css")
  rem()
  activ1.classList.toggle("active")
}
mod2.onclick = () => {
  modLink.setAttribute("href" , "styles/second.css")
  rem()
  activ2.classList.toggle("active")
}
mod3.onclick = () => {
  modLink.setAttribute("href" , "styles/third.css")
  rem()
  activ3.classList.toggle("active")
}

activ1.onclick = () => {
  modLink.setAttribute("href" , "styles/main.css")
  rem()
  activ1.classList.toggle("active")
}
activ2.onclick = () => {
  modLink.setAttribute("href" , "styles/second.css")
  rem()
  activ2.classList.toggle("active")
}
activ3.onclick = () => {
  modLink.setAttribute("href" , "styles/third.css")
  rem()
  activ3.classList.toggle("active")
}

