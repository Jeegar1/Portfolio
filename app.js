(function () {
    // Toggle active class and section on click
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        // Toggle the light theme class
        document.body.classList.toggle("light-mode");

        // Toggle the computer image as per theme
        var img = document.querySelector(".header-img").src;
        if (img.indexOf('computer_dark.svg')!=-1) {
            document.querySelector(".header-img").src  = "img/computer_light.svg";
        } else {
           document.querySelector(".header-img").src = "img/computer_dark.svg";
       }
    })
})();
