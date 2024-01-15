let userTxt;
let oldWord;
let newWord;
let replaceItBtn = document.getElementById("replaceItBtn");
let updatedUserTxt;
let casesensitive;

replaceItBtn.addEventListener("click", checkValidity);

function checkValidity () {
    userTxt = document.getElementById("userTxt").value;
    oldWord = document.getElementById("oldWord").value;
    newWord = document.getElementById("newWord").value;
    replaceItBtn = document.getElementById("replaceItBtn");
    updatedUserTxt = document.getElementById("updatedUserTxt");
    casesensitive = (document.getElementById("casesensitive").checked == true) ? true : false;
    returnEverything([userTxt, oldWord, newWord, replaceItBtn, updatedUserTxt]);
    let checkText = checkTxt(userTxt);
    let checkOldWord = checkOldWrd()
    let checkNewWord = checkTxt(newWord);
    if (checkText && checkOldWord && checkNewWord) replaceWords();
    if (!checkText || !checkOldWord || !checkNewWord) showInformation("Eingaben sind leer/ungültig!", "red");
    resetElements();
}

function returnEverything(dataArray) {
    for (let x in dataArray) {
        return dataArray[x];
    }
}

function checkTxt(x) {
    if (x.trim() != "") return true;
    else return false;
}

function checkOldWrd() {
    if ((oldWord.trim() != "") && (userTxt.includes(oldWord))) return true;
    else return false;
}

function showInformation(info, color) {
    let informationDiv = document.getElementById("informationDiv");
    informationDiv.style.display = "block";
    informationDiv.style.color = color;
    let information = document.getElementById("information");
    information.innerHTML = info;
    setTimeout(() => {
        informationDiv.style.display = "none";
        information.innerHTML = "";
    }, 2000)
}

function replaceWords() {
    if (casesensitive) {
        //alert("c")
        userTxt = userTxt.replaceAll(oldWord, newWord);
    }
    if (!casesensitive) {
        //alert("Nc")
        userTxt = userTxt.replaceAll(oldWord.toLowerCase(), newWord).replaceAll(oldWord.toUpperCase(), newWord).replaceAll(oldWord[0].toLowerCase(), newWord).replaceAll(oldWord[0].toUpperCase(), newWord);

    }
    updatedUserTxt.innerHTML = userTxt;
}

function resetElements() {
    user
}