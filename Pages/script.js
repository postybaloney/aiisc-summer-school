var modal = document.getElementById("model");

var modalImg = document.getElementById("modal-img");

var images = document.querySelectorAll('.flex-item img')
images.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target != modalImg) {
        modal.style.display = "none";
    }
}