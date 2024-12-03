document.addEventListener("DOMContentLoaded", function () {
    // Form submission handler
    const form = document.getElementById("contactForm");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate input fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            showNotification("All fields are required. Please fill out the form completely.", "danger");
            alert("All fields are required. Please fill out the form completely."); // Pop-up alert
            return;
        }

        if (!validateEmail(email)) {
            showNotification("Please enter a valid email address.", "warning");
            alert("Please enter a valid email address."); // Pop-up alert
            return;
        }

        // Simulate sending the message (You can replace this with real functionality later)
        setTimeout(() => {
            showNotification("Thank you for your message! I will get back to you shortly.", "success");
            alert("Thank you for your message! I will get back to you shortly."); // Pop-up alert
            form.reset(); // Clear the form fields
        }, 1000);
    });

    // Email validation function
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Function to display notification messages
    function showNotification(message, type) {
        notification.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
    }
});
