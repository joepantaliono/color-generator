function generateRandomHex() {
    // #XXXXXX
    var values = "0123456789ABCDEF";
    let randomHex = "#" 
    while(randomHex.length < 7) {
        randomHex += values[(Math.floor(Math.random() * 16))];
    }
    return randomHex
};

window.onload = function() {
    var clicked = false;
    document.getElementById("generate").onclick = function () {
        if (clicked == false) {
            clicked = true;
            if (window.innerWidth <= 600) {
                document.getElementById('page-title').setAttribute('id', 'page-title-smaller');
            }
            else {
                document.getElementById('page-title').setAttribute('id', 'page-title-larger')
            }
            var colors = [generateRandomHex(), generateRandomHex(), generateRandomHex()];
            for(i = 0; i < colors.length; i++) {
                var div = document.createElement("div")
                div.style.background = colors[i];
                div.innerHTML = `<p>${colors[i]}</p>`;
                div.classList.add("color-containers")
                document.getElementById("main").appendChild(div);
            }
        }
        else {
            var containers = document.getElementsByClassName("color-containers");
            for(i = 0; i < containers.length; i++) {
                var newColor = generateRandomHex();
                containers[i].style.background = newColor;
                containers[i].innerHTML = `<p>${newColor}</p>`;
            }
        }
    }
}