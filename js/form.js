const inputBox = document.querySelector(".inputField input")
const addButton = document.querySelector(".inputField button")
const listOfRecords = document.querySelector(".listOfRecords")

showRecords();

addButton.onclick = ()=>{
    let text = inputBox.value;
    let getLocalStorage = localStorage.getItem("new entry");
    let listRecords = [];
    if (getLocalStorage != null) {
        listRecords = JSON.parse(getLocalStorage);
    }
    if (text != "") {
        listRecords.push(text);
    }
    localStorage.setItem("new entry", JSON.stringify(listRecords));
    showRecords();
}

function showRecords() {
    let getLocalStorage = localStorage.getItem("new entry");
    let listRecords = [];
    if (getLocalStorage != null) {
        listRecords = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listRecords.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteRecord(${index})">--</span></li>`
    });
    listOfRecords.innerHTML = newLiTag;
}

function deleteRecord(index) {
    let getLocalStorage = localStorage.getItem("new entry");
    let listRecords = JSON.parse(getLocalStorage);
    listRecords.splice(index, 1);
    localStorage.setItem("new entry", JSON.stringify(listRecords));
    showRecords();
}
