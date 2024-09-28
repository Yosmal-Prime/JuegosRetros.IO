
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var closeModal = document.getElementById("closeModal");

var images = document.querySelectorAll(".clickable");

images.forEach(function(image) {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});
