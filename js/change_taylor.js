function ChangeTaylor(Taylor) {
    if (Taylor.src == "https://raw.githubusercontent.com/usachova/pictures-for-site/main/dog.jpg") {
        Taylor.src = "https://raw.githubusercontent.com/usachova/pictures-for-site/main/jaba.jpg";
        Taylor.title="сова";
        Taylor.alt="сова";
    }
    else {
        Taylor.src = "https://raw.githubusercontent.com/usachova/pictures-for-site/main/dog.jpg";
        Taylor.title="собака";
        Taylor.alt="собака";
    }

}