var menu = document.getElementsByClassName("menu");
for(var i=0; i<menu.length; i++){
    menu[i].onclick = function(){
    //    animator(this.value);

        var title = document.getElementById("title");       //both merhod is ringh you can call by function or
        title.className = this.value;

    }
}

var darkButton = document.getElementById("dark-button");
darkButton.onclick = function() {
    var section = document.getElementById("section");
    var sidenev = document.getElementById("sidenev");
    var menuBox = document.getElementById("menu-box");
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    var button = document.getElementsByTagName("button");

    if(section.style.background == "rgb(17, 17, 17)"){
        section.style.background = "#FCE5CD";
        sidenev.style.background = "#F7D7B5";
        sidenev.style.color = "black";
        title.style.color = "#351C75";
        desc.style.color = "#EBA45A";
        for(var i=0; i<button.length; i++){
            button[i].style.color = "black";
        }

    }
    else{
        section.style.background = "#111111";
        sidenev.style.background = "#15151D";
        sidenev.style.color = "white";
        title.style.color = "#4672FE";
        desc.style.color = "white";

        for(var i=0; i<button.length; i++){
            button[i].style.color = "white";
        }
    }
}

function animator(classValue) {
    var title = document.getElementById("title");
    title.className = classValue;
}
