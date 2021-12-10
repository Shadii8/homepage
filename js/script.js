{
    const welcome = () => {
        console.log("Cześć");
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const nextColorName = document.querySelector(".js-nextColorName")

        body.classList.toggle("body__light");
        nextColorName.innerText = body.classList.contains("body__light") ? "ciemne" : "jasne";
    }
    const init = () => {
        let button = document.querySelector(".js-button");


        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };

    init();

}