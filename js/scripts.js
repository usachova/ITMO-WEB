function ChangeTaylor(Taylor) {
    if (Taylor.src == "https://raw.githubusercontent.com/usachova/ITMO-WEB/main/pics/dog.jpg")
        Taylor.src = "https://raw.githubusercontent.com/usachova/ITMO-WEB/main/pics/jaba.jpg";
    else
        Taylor.src = "https://raw.githubusercontent.com/usachova/ITMO-WEB/main/pics/dog.jpg";
}

var loadTime = (function () {
    var now = new Date().getTime();
    var page_load_time = now - performance.timing.navigationStart;
    return page_load_time / 1000;
})();