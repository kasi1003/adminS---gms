document.addEventListener("DOMContentLoaded", function () {
  // Get references to the button and modal elements
  const addRecordButton = document.getElementById("addBurialRecord");
  const modal = document.getElementById("myModal");

  // Add a click event listener to the "Add Records" button
  addRecordButton.addEventListener("click", function () {
    // Show the modal
    modal.style.display = "block";
  });

  // Close the modal when the close button is clicked
  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when the "Close" button in the modal footer is clicked
  const modalCloseButton = modal.querySelector(".btn-secondary");
  modalCloseButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });


  

});
