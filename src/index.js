function generatePoem(event) {
    event.preventDefault();

new Typewriter ("#poem", {
    strings: "this is nice.",
    autoStart:true,
    delay: 50,
    cursor: "",
})
}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

