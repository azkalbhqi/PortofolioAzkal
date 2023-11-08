const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
const btnSubmit = document.querySelector("#submit");
const alertSubmit = document.querySelector("#alertSubmit");

const textarea = document.querySelector("#kritik");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  checkbox.checked = true;
  html.classList.add("dark");
} else {
  checkbox.checked = false;
}

checkbox.addEventListener("click", function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

// function thx() {
//   textarea.value = "";
//   alertSubmit.classList.remove("hidden");
// }
//formcode
const scriptURL = "https://script.google.com/macros/s/AKfycby8q2qdcFNZ8St3Z3Wh2Ip0tXVurByIkEdyrBohV-fWWvqL3IHQ0zqrq3Q7LuVmyMXSjA/exec";
const form = document.forms["aspirasi"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  alertSubmit.classList.remove("hidden");
});

//sumitted condition
// const submitted = document.getElementById("submit");
// if (submitted) {
//   textarea.value = "";
//   alertSubmit.classList.remove("hidden");
// }
