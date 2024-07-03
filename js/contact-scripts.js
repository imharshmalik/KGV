// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you for reaching out, ${name}. We will respond to your query at ${email} shortly!`);

    // Clear the form fields
    document.getElementById('contactForm').reset();
});