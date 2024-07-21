document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    // Interactive menu
    menu.addEventListener("mouseover", function(event) {
        if (event.target.tagName === "A") {
            event.target.style.color = "#555";
        }
    });

    menu.addEventListener("mouseout", function(event) {
        if (event.target.tagName === "A") {
            event.target.style.color = "";
        }
    });

    // Form validation and submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "All fields are required.";
            formMessage.style.color = "red";
            return;
        }

        // Update the content dynamically
        formMessage.textContent = "Thank you for your message, " + name + "!";
        formMessage.style.color = "green";

        // Clear the form
        form.reset();
    });
});
