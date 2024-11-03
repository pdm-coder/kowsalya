window.onscroll = function () {
    scrollFunction()
};

let scrollButton = document.getElementById("scrollBtn");
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
