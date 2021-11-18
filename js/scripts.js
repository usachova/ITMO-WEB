function ChangeTaylor(Taylor) {
    if (Taylor.src == "https://raw.githubusercontent.com/usachova/pictures-for-site/main/dog.jpg")
        Taylor.src = "https://raw.githubusercontent.com/usachova/pictures-for-site/main/jaba.jpg";
    else
        Taylor.src = "https://raw.githubusercontent.com/usachova/pictures-for-site/main/dog.jpg";
}

var loadTime = (function () {
    return performance.now() / 1000;
})();

document.addEventListener("DOMContentLoaded", loadTime);