// Get modal elements
const addRecipeModal = document.getElementById("addRecipeModal");
const viewModal = document.getElementById("viewModal");
const editModal = document.getElementById("editModal");

// Get button elements
const addRecipeButton = document.getElementById("addRecipeButton");
const addIngredientButton = document.getElementById("addIngredientBtn");

// Close modal elements
const closeButtons = document.querySelectorAll(".close, .close-btn");

// Table body for recipes
const recipeTableBody = document.getElementById("recipeTable").querySelector("tbody");

// Open Add Recipe Modal
addRecipeButton.onclick = function() {
    addRecipeModal.style.display = "block";
}

// Close modals
closeButtons.forEach(btn => {
    btn.onclick = function() {
        btn.closest(".modal").style.display = "none";
    }
});

// Add ingredient functionality
addIngredientButton.onclick = function() {
    const ingredientsContainer = document.getElementById("ingredientsContainer");
    const newIngredientDiv = document.createElement("div");
    newIngredientDiv.className = "ingredients";
    newIngredientDiv.innerHTML = `
        <input type="text" placeholder="Origin" class="ingredientOrigin" required>
        <input type="text" placeholder="Name" class="ingredientName" required>
        <input type="text" placeholder="Nutritional Value" class="nutritionalValue" required>
        <input type="text" placeholder="Allergen Information" class="allergenInfo" required>
        <input type="text" placeholder="Shelf Life" class="shelfLife" required>
        <input type="number" placeholder="Quantity" class="quantity" required min="1">
        <input type="text" placeholder="Unit" class="unit" required>
    `;
    ingredientsContainer.appendChild(newIngredientDiv);
}
 

 // Handle Add Recipe Form Submission
document.getElementById("addRecipeForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

// Get form values
    const recipeTitle = document.getElementById("recipeTitle").value;
    const recipeImage = document.getElementById("recipeImage").value;
    const preparationTime = document.getElementById("preparationTime").value;
    const cookingTime = document.getElementById("cookingTime").value;
    const servingSize = document.getElementById("servingSize").value;
    const foodDescription = document.getElementById("foodDescription").value;
    const calories = document.getElementById("calories").value;
    const foodOrigin = document.getElementById("foodOrigin").value;
    const instructions = document.getElementById("instructions").value;

// Create new row in the recipe table
    const newRow = recipeTableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    const newId = recipeTableBody.rows.length; // Simple ID based on row number
    const currentDate = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    cell1.innerHTML = newId;
    cell2.innerHTML = recipeTitle;
    cell3.innerHTML = "Your Name"; // You can modify this as needed
    cell4.innerHTML = currentDate;
    cell5.innerHTML = `
        <button class="view-btn" data-title="${recipeTitle}" data-author="Your Name" data-date="${currentDate}">View</button>
        <button class="edit-btn" data-id="${newId}" data-title="${recipeTitle}" data-author="Your Name" data-date="${currentDate}">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    // Close the add recipe modal
    addRecipeModal.style.display = "none";

    // Clear form fields
    this.reset();
}

// Handle View Recipe Functionality
recipeTableBody.onclick = function(event) {
    if (event.target.classList.contains("view-btn")) {
        const title = event.target.getAttribute("data-title");
        const author = event.target.getAttribute("data-author");
        const date = event.target.getAttribute("data-date");

        document.getElementById("recipeTitle").textContent = title;
        document.getElementById("recipeAuthor").textContent = author;
        document.getElementById("recipeDate").textContent = date;

        viewModal.style.display = "block";
    }
}


// Function to open the edit modal and populate it with the current recipe details
function openEditModal(recipe) {
    document.getElementById('recipeName').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;
    document.getElementById('prepTime').value = recipe.prepTime;
    document.getElementById('cookTime').value = recipe.cookTime;
    document.getElementById('servings').value = recipe.servings;
    document.getElementById('difficulty').value = recipe.difficulty;
    document.getElementById('cuisine').value = recipe.cuisine;
    document.getElementById('notes').value = recipe.notes;
    // Note: Handle image uploads differently based on your implementation

    document.getElementById('editModal').style.display = 'block';
}

// Function to close the modal
document.getElementById('closeEditModal').onclick = function() {
    document.getElementById('editModal').style.display = 'none';
}

// Example recipe data (you can replace this with real data)
const exampleRecipe = {
    name: "Chocolate Cake",
    ingredients: "Flour, Sugar, Cocoa Powder, Eggs, Milk",
    instructions: "Mix ingredients and bake for 30 minutes at 350°F.",
    prepTime: "20 minutes",
    cookTime: "30 minutes",
    servings: 8,
    difficulty: "medium",
    cuisine: "Dessert",
    notes: "Best served with ice cream."
};

// Open the edit modal with example data (for demonstration)
openEditModal(exampleRecipe);


// Implementing Delete Confirmation
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const confirmDelete = confirm("Are you sure you want to delete this recipe?");
        if (confirmDelete) {
            const row = button.closest('tr');
            row.parentNode.removeChild(row);
            alert("Recipe deleted successfully.");
        }
    });
});




