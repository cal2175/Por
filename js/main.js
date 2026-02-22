document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.05
    });

    elements.forEach(function (el) {
        observer.observe(el);
    });

});