
var iframes = document.getElementsByTagName("iframe");

iframes[0].onmouseenter = function() {
    document.getElementsByTagName("iframe")[0].style.borderRadius = "0";
}


iframes[0].onmouseout = function() {
    document.getElementsByTagName("iframe")[0].style.borderRadius = "10px";
}


