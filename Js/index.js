// document.addEventListener("DOMContentLoaded", function() {
//     const showFormBtn = document.getElementById("showFormBtn");
//     const formOverlay = document.getElementById("formOverlay");
//     const closeFormBtn = document.getElementById("closeFormBtn");
//     const successMessage = document.getElementById("successMessage");
  
//     showFormBtn.addEventListener("click", function() {
//       formOverlay.style.display = "block";
//     });
  
//     closeFormBtn.addEventListener("click", function() {
//       formOverlay.style.display = "none";
//     myForm.reset(); // Clear the form
//     });
  
//     const myForm = document.getElementById("myForm");
//     myForm.addEventListener("submit", function(e) {
//       e.preventDefault(); // Prevent default form submission behavior
  
//       // Here you would handle form submission to WhatsApp
//       // Example: sendWhatsAppMessage();
  
//       // Show success message
//       successMessage.style.display = "block";

//         // Clear the form
//     myForm.reset();
  
//       // Hide success message after 5 seconds
//       setTimeout(function() {
//         successMessage.style.display = "none";
//       }, 5000);
//     });
//   });
  