console.log("Cześć");

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body__light");

    if (body.classList.contains("body__light")) {
        themeName.innerText = "Włącz ciemne tło";
    } else {
        themeName.innerText = "Włącz jasne tło";
    }
});