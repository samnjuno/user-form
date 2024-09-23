document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('userForm');
    const formSummary = document.getElementById('formSummary');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Capture form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contactMethod = document.getElementById('contactMethod').value;
        const termsAccepted = document.getElementById('terms').checked;

        // Validate form data
        let isValid = true;
        clearErrors();

        if (!name) {
            displayError('nameError', 'Name is required');
            isValid = false;
        }

        if (!validateEmail(email)) {
            displayError('emailError', 'Invalid email format');
            isValid = false;
        }

        if (!contactMethod) {
            displayError('contactMethodError', 'Please select a contact method');
            isValid = false;
        }

        if (!termsAccepted) {
            alert('You must accept the terms and conditions');
            isValid = false;
        }

        if (isValid) {
            const formData = {
                name,
                email,
                contactMethod,
                termsAccepted
            };

            // Display the form data
            displayFormData(formData);
            alert('Form submitted successfully!');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function displayError(id, message) {
        document.getElementById(id).textContent = message;
    }

    function clearErrors() {
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('contactMethodError').textContent = '';
    }

    function displayFormData(data) {
        formSummary.innerHTML = `
            <h2>Form Summary</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>
            <p><strong>Terms Accepted:</strong> ${data.termsAccepted ? 'Yes' : 'No'}</p>
        `;
    }
});
