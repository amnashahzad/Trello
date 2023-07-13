    // Function to add a new card to a list
    function addCard() {
        const cardTitle = prompt("Enter the card title:");
  
        if (cardTitle) {
          // Create a new card element
          const cardElement = document.createElement("div");
          cardElement.classList.add("card");
          
          const cardTitleElement = document.createElement("div");
          cardTitleElement.classList.add("card-title");
          cardTitleElement.textContent = cardTitle;
          
          const cardButtonsElement = document.createElement("div");
          cardButtonsElement.classList.add("card-buttons");
          
          const editButton = document.createElement("button");
          editButton.classList.add("edit-card");
          editButton.textContent = "Edit";
          
          const removeButton = document.createElement("button");
          removeButton.classList.add("remove-card");
          removeButton.textContent = "Remove";
          
          cardButtonsElement.appendChild(editButton);
          cardButtonsElement.appendChild(removeButton);
          
          cardElement.appendChild(cardTitleElement);
          cardElement.appendChild(cardButtonsElement);
          
          // Get the parent list of the clicked button
          const parentList = this.parentNode;
  
          // Find the cards container within the parent list
          const cardsContainer = parentList.querySelector(".cards-container");
  
          // Append the new card element to the cards container
          cardsContainer.appendChild(cardElement);
        }
      }
  
      // Function to remove a card
      function removeCard() {
        const card = this.parentNode.parentNode;
        const cardsContainer = card.parentNode;
        cardsContainer.removeChild(card);
      }
  
      // Function to edit a card
      function editCard() {
        const cardTitle = this.parentNode.parentNode.querySelector(".card-title");
        const newTitle = prompt("Enter the new card title:", cardTitle.textContent);
        if (newTitle) {
          cardTitle.textContent = newTitle;
        }
      }
  
      // Find all add card buttons and attach click event listener
      const addCardButtons = document.querySelectorAll(".add-card");
      addCardButtons.forEach(button => {
        button.addEventListener("click", addCard);
      });
  
      // Find all remove card buttons and attach click event listener
      const removeCardButtons = document.querySelectorAll(".remove-card");
      removeCardButtons.forEach(button => {
        button.addEventListener("click", removeCard);
      });
  
      // Find all edit card buttons and attach click event listener
      const editCardButtons = document.querySelectorAll(".edit-card");
      editCardButtons.forEach(button => {
        button.addEventListener("click", editCard);
      });