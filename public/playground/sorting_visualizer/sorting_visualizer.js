function randomize_numbers(n, parent) {
    // clear the div containing the old numbers
    parent.innerHTML = "";
    for (let i = 0; i < n; i++) {
        var div = document.createElement("div");
        div.className = "number";
        div.style.height = rand() + "px";
        div.style.width = '2px';
        parent.appendChild(div);
    }
}

function rand() {
    return Math.floor(Math.random() * (window.screen.height * 0.7) );
}

function load_axios() {
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://unpkg.com/axios/dist/axios.min.js';

    head.appendChild(script)
}
document.addEventListener('DOMContentLoaded', (e) => {
    load_axios();

    var numbers = document.getElementById("numbers");
    numbers.style.height = window.screen.height * 0.7;
    numbers.style.paddingRight = window.screen.width * 0.2;
    numbers.style.paddingLeft = window.screen.width * 0.2;
    randomize_numbers(300, numbers);

    var options = document.getElementById("options");
    options.style.height = window.screen.height * 0.1;

    document.getElementById("scramble").addEventListener("click", (e) => {
        randomize_numbers(300, numbers);
    });
});