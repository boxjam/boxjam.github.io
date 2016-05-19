function showAbout() {  
    document.getElementById("about").style.display = "block";
    document.getElementById("about").style.opacity = 1;
    document.getElementById("work").style.display = "none";
    document.getElementById("wprk").style.opacity = 0;
    document.getElementById("contact").style.display = "none";
    document.getElementById("contact").style.opacity = 0;
}
function showWork() {
    document.getElementById("about").style.display = "none";
    document.getElementById("about").style.opacity = 0;
    document.getElementById("work").style.display = "block";
    document.getElementById("work").style.opacity = 1;
    document.getElementById("contact").style.display = "none";
    document.getElementById("contact").style.opacity = 0;
}
function showContact() {
    document.getElementById("about").style.display = "none";
    document.getElementById("about").style.opacity = 0;
    document.getElementById("work").style.display = "none";
    document.getElementById("work").style.opacity = 0;
    document.getElementById("contact").style.display = "block";
    document.getElementById("contact").style.opacity = 1;
}
