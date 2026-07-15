const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventName = document.getElementById("event").value;

    if (!name || !email || !phone || !eventName) {
        message.style.color = "red";
        message.textContent = "Please fill in all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent = `Thank you, ${name}! You have successfully registered for ${eventName}.`;

    form.reset();
});