function changeColor() {
    let colors = ["red", "blue", "green", "purple", "orange"];
    let random = Math.floor(Math.random() * colors.length);

    document.getElementById("heading").style.backgroundColor = colors[random];
    }