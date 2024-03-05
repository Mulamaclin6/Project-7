// Task 1: Select the paragraph element with the id paragraph and change its content to "Hello World".
const paragraphElement = document.getElementById("paragraph");
if (paragraphElement) {
  paragraphElement.textContent = "Hello World";
}

// Task 2: Using JavaScript, create an image element with the source attribute set to "image.jpg".
const imageElement = document.createElement("img");
imageElement.src = "image.jpg";

// Task 3: Append the created image element to the div element with the id imageContainer.
const imageContainer = document.getElementById("imageContainer");
if (imageContainer) {
  imageContainer.appendChild(imageElement);
}
