document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the button and contact information
    const toggleButton = document.getElementById('toggle-button');
    const contactInfo = document.getElementById('contact-info');

    // Add a click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the contact information
        if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
            contactInfo.style.display = 'block';
        } else {
            contactInfo.style.display = 'none';
        }
    });
});
