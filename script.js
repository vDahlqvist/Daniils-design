/* Toggle between showing and hiding the navigation menu */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "hyperlinks") {
        x.className += " responsive";
    } else {
        x.className = "hyperlinks";
    }
}