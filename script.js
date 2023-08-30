const changeColorBox = document.querySelector(".changer");

const btn = document.querySelector("button")

const color = function () {
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "purple",
        "pink",
        "indigo",
        "orange",
        "white",
        "darkred",
        "cyan",
        "brown",
        "maroon",
        "midnight blue",
        "sky blue",
        
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index]
}


btn.addEventListener('click', () => {
    return changeColorBox.style.backgroundColor = color();
})