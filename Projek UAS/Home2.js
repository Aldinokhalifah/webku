//NAVBAR//
let navbar = document.getElementById("") //Setelah getElementById kasih id yg mau dipakai//

navbar.addEventListener("click", function(e) {
    if (e.target.tagName === "A") {
        let targetPage = e.target.getAttribute("href");
        window.location.href = targetPage;
    }
});


//DROPDOWN//
let dropdown = document.getElementById(""); //Setelah getElementById kasih id yg mau dipakai//

dropdown.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        let targetPage = e.target.getAttribute("href");
        window.location.href = targetPage;
    }
});