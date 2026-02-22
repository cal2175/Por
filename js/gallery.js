let buttons = document.querySelectorAll(".filter button");

let images = document.querySelectorAll(".gallery img");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        let filter = button.dataset.filter;

        buttons.forEach(b => b.classList.remove("active"));

        button.classList.add("active");

        images.forEach(img => {

            if (filter === "all" || img.dataset.category === filter) {

                img.style.display = "block";

            } else {

                img.style.display = "none";

            }

        });

    });

});