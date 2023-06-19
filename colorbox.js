const box=document.getElementById("box");
const red_button = document.getElementById("red");
red_button.onclick=function(){
    box.style.backgroundColor="red";
};

const yellow_button = document.getElementById("yellow");
yellow_button.onclick=function(){
    box.style.backgroundColor="yellow";
};

const pink_button = document.getElementById("pink");
pink_button.onclick=function(){
    box.style.backgroundColor="pink";
};

const xhr = new XMLHttpRequest();
const brown_button = document.getElementById("brown");
brown_button.onclick=function(){
    box.style.backgroundColor="brown";
    
    xhr.open("GET", "https://row.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");
    xhr.onloadend = handleAjaxResponse;
    xhr.send();
    
};

let handleAjaxResponse = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let contributor = response.Games.contributors[3];
        box[0].innerHTML = contributor;
    } else {
        box[0].innerHTML = "Something went wrong.";
    }
};

