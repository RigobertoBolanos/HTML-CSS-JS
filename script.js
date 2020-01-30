var modal1 = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");
var modal3 = document.getElementById("Modal3");
var modal4 = document.getElementById("Modal4");
var modal5 = document.getElementById("Modal5");
var modal6 = document.getElementById("Modal6");
var modal7 = document.getElementById("Modal7");
var modal8 = document.getElementById("Modal8");

var html = document.getElementById("btn1")
var css = document.getElementById("btn2")
var javascript = document.getElementById("btn3")
var jquery = document.getElementById("btn4")
var liderazgo = document.getElementById("btn5")
var creativo = document.getElementById("btn6")
var organizado = document.getElementById("btn7")
var serio = document.getElementById("btn8")

var span1 = document.getElementsByClassName("close1")[0];
html.onclick = function () {
    modal1.style.display = "block";
}
var span2 = document.getElementsByClassName("close2")[0];
css.onclick = function () {
    modal2.style.display = "block";
}
var span3 = document.getElementsByClassName("close3")[0];
javascript.onclick = function () {
    modal3.style.display = "block";
}
var span4 = document.getElementsByClassName("close4")[0];
jquery.onclick = function () {
    modal4.style.display = "block";
}
var span5 = document.getElementsByClassName("close5")[0];
liderazgo.onclick = function () {
    modal5.style.display = "block";
}
var span6 = document.getElementsByClassName("close6")[0];
creativo.onclick = function () {
    modal6.style.display = "block";
}
var span7 = document.getElementsByClassName("close7")[0];
organizado.onclick = function () {
    modal7.style.display = "block";
}
var span8 = document.getElementsByClassName("close8")[0];
serio.onclick = function () {
    modal8.style.display = "block";
}

span1.onclick = function () {
    modal1.style.display = "none";
}

span2.onclick = function () {
    modal2.style.display = "none";
}

span3.onclick = function () {
    modal3.style.display = "none";
}

span4.onclick = function () {
    modal4.style.display = "none";
}

span5.onclick = function () {
    modal5.style.display = "none";
}

span6.onclick = function () {
    modal6.style.display = "none";
}

span7.onclick = function () {
    modal7.style.display = "none";
}

span8.onclick = function () {
    modal8.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
}
