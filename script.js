document.addEventListener('DOMContentLoaded', function() {
    // Home button
    document.getElementById('homeBtn').addEventListener('click', function() {
        redirectToPage('home.html'); // Replace 'home.html' with the actual page URL
    });

    // New Stock button
    document.getElementById('newStockBtn').addEventListener('click', function() {
        redirectToPage('new_stock.html'); // Replace 'new_stock.html' with the actual page URL
    });

    // Contact button
    document.getElementById('contactBtn').addEventListener('click', function() {
        redirectToPage('contact.html'); // Replace 'contact.html' with the actual page URL
    });
});
// script.js

function redirectToPage(page) {
    window.location.href = page;
}

function displaySelectedImage(imagePath) {
    const gallery = document.getElementById('selectedImages');
    const fullImageDiv = document.createElement('div');
    fullImageDiv.className = 'full-image';

    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = 'Selected Product';

    fullImageDiv.appendChild(imgElement);
    gallery.appendChild(fullImageDiv);
}
