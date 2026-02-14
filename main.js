window.onload = () => {
  document.body.classList.remove("container");

  // Ensure modal and response text are hidden on load
  const modal = document.getElementById("popupModal");
  modal.style.display = "none";

  const responseText = document.getElementById("responseText");
  responseText.style.display = "none";
};

// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const responseText = document.getElementById("responseText");

// Modal
const modal = document.getElementById("popupModal");
const modalText = document.getElementById("modalText");

// Function to show modal
function showPopup(message) {
  modalText.textContent = message;
  modal.style.display = "flex"; // only show when button clicked
}

// Yes button click
yesBtn.addEventListener("click", () => {
  showPopup("Let's have a call tonight then 🤭");
  responseText.textContent = "";
  responseText.style.display = "block"; // show the text
});

// No button click
noBtn.addEventListener("click", () => {
  showPopup("Click Yes 🤪");
  responseText.textContent = "";
  responseText.style.display = "block"; // show the text
});

// No button random movement
noBtn.addEventListener("mouseenter", () => {
  const x = Math.floor(Math.random() * 1000) - 500;
  const y = Math.floor(Math.random() * 1000) - 500;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("mouseleave", () => {
  noBtn.style.transform = `translate(0, 0)`;
});

// Close modal by clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


