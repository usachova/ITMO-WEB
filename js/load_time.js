let loadTime = (function () {
    return performance.now() / 1000;
})();

document.addEventListener("DOMContentLoaded", function () {
    console.log('content loaded')
});