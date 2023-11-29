document.addEventListener("DOMContentLoaded", function () {
    const customerForm = document.getElementById("customerForm");

    customerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Validate the form fields (add your own validation logic)
        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const idNumber = document.getElementById("idNumber").value;
        // ... add validation for other fields

        // Example: Check if the name is not empty
        if (name.trim() === "") {
            alert("Name is required");
            return;
        }

        // Example: Check if the ID Number is a valid format
        // (add your own validation logic for ID Number)
        if (!isValidIdNumber(idNumber)) {
            alert("Invalid ID Number");
            return;
        }

        // If all validations pass, you can submit the form or perform further actions
        // For now, let's just log the form data
        console.log("Form submitted successfully!");
        console.log("Name:", name);
        console.log("Surname:", surname);
        console.log("ID Number:", idNumber);
        // ... log other form data

        // You can submit the form using AJAX or redirect to another page here
        // For simplicity, we'll just reload the page
        // window.location.reload();
    });

    function isValidIdNumber(idNumber) {
        // Add your validation logic for ID Number here
        // This is just an example, replace it with your own validation
        // For simplicity, we'll assume a valid ID Number is a numeric value
        return !isNaN(idNumber);
    }
});
