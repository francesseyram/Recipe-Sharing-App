// Modal for the edit button
const editButtons = document.querySelectorAll('.edit_button'); // Ensure the edit buttons have this class
const editUserModal = document.getElementById('editUserModal');
const closeEditModalButton = document.querySelector('.close'); // Close button in the edit modal

editButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Retrieve user data from the row
        const row = button.closest('tr');
        const userId = row.cells[0].textContent;   // ID
        const userName = row.cells[1].textContent; // Name
        const userEmail = row.cells[2].textContent; // Email

        document.getElementById('userId').value = userId;      // Assuming userId input is for readonly ID
        document.getElementById('userName').value = userName;  // Name field
        document.getElementById('userEmail').value = userEmail; // Email field

        // Show the edit modal
        editUserModal.style.display = "block";
    });
});

// Close modal when the close button is clicked
closeEditModalButton.addEventListener('click', function() {
    editUserModal.style.display = "none"; // Hide the modal
});

window.addEventListener('click', function(event) {
    if (event.target == editUserModal) {
        editUserModal.style.display = "none"; // Hide the modal
    }
});

// Form submission with validation
document.getElementById('editUserForm').onsubmit = function(event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const emailError = document.getElementById('emailError');

    // Clear previous error
    emailError.style.display = 'none';

    // Basic validation
    if (!userName) {
        alert('Please enter your name.');
        return;
    }

    // Email format validation
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userEmail)) {
        emailError.style.display = 'block';
        return;
    }

    // If everything is valid
    alert('User information has been updated successfully!');
    editUserModal.style.display = 'none'; // Close the modal
};



// Select all delete buttons
const deleteButtons = document.querySelectorAll('.delete_button');

// Add event listeners to each delete button
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Display confirmation dialog
        const confirmDelete = confirm("Are you sure you want to delete this user?");

        // Proceed with deletion if confirmed
        if (confirmDelete) {
            // Get the row of the clicked delete button
            const row = button.closest('tr');

            // Remove the row from the table
            row.parentNode.removeChild(row);
            // Optionally, you can add a message to indicate deletion
            alert("User deleted successfully.");
        }
    });
});



//Modal for the view button
const viewButtons = document.querySelectorAll('.view_button');
const viewUserModal = document.getElementById('viewUserModal');
const closeModalButton = document.querySelector('.close');

// Add event listeners to each view button
viewButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Retrieve user data from the row
        const row = button.closest('tr');
        const userId = row.cells[0].textContent;   // ID
        const userName = row.cells[1].textContent; // Name
        const userEmail = row.cells[2].textContent; // Email


        // Populate modal with user details
        document.getElementById('modalUserId').textContent = userId;
        document.getElementById('modalUserName').textContent = userName;
        document.getElementById('modalUserEmail').textContent = userEmail;

        // Show the modal
        viewUserModal.style.display = "block";
    });
});

// Close modal when the close button is clicked
closeModalButton.addEventListener('click', function() {
    viewUserModal.style.display = "none"; // Hide the modal
});

// Optional: Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target == viewUserModal) {
        viewUserModal.style.display = "none";
    }
});


