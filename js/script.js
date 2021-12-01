{
    const welcome = () => {
        console.log("Cześć");
    }

    const OnChangeBackgroundClick = () => {
        let body = document.querySelector(".body");
        let themeName = document.querySelector(".js-themeName");
        body.classList.toggle("body__light");

        if (body.classList.contains("body__light")) {
            themeName.innerText = "Włącz ciemne tło";
        } else {
            themeName.innerText = "Włącz jasne tło";
        }
    }
    const init = () => {
        let button = document.querySelector(".js-button");
       

        button.addEventListener("click", OnChangeBackgroundClick);

        welcome();
};
  
init();

}