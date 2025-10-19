// Display current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeElement.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

const imageInput = document.getElementById("imageUpload");
const preview = document.getElementById("preview");

// Load image from localStorage on page load
window.onload = function () {
  const storedImage = localStorage.getItem("uploadedImage");
  if (storedImage) {
    preview.src = storedImage;
    preview.style.display = "block";
  }
};

// Handle image upload
imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageData = e.target.result;
      preview.src = imageData;
      preview.style.display = "block";
      localStorage.setItem("uploadedImage", imageData); // Save to localStorage
    };
    reader.readAsDataURL(file);
  }
});

const input = document.getElementById("userInput");

// Load saved input on page load
window.onload = () => {
  const savedText = localStorage.getItem("savedInput");
  if (savedText) {
    input.value = savedText;
  }
};

// Save input to localStorage on every change
input.addEventListener("input", () => {
  localStorage.setItem("savedInput", input.value);
});
