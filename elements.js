
function reload_sizes(){
    var i = document.querySelector("#forsidebilde").clientHeight;
    document.getElementById("frontimagecontainer").style.height = String(i) + "px";
    document.getElementById("forsidebilde").style.marginTop = String(-i -1 * parseInt(window.scrollY)) + "px";
    document.getElementById("reidunelise").style.marginTop = String(-i + i*0.3 -0.5 * parseInt(window.scrollY)) + "px";
}

window.addEventListener("scroll", () => {
    reload_sizes();    
});

window.addEventListener("resize", () => {
    reload_sizes();
})

window.addEventListener("load", () => {
    reload_sizes();
})
