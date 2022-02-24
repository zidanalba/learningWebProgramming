// getting the modal
var modal = document.getElementById("myModal");

// getting the button
var btn = document.getElementById("myBtn");

// getting the span to close the modal
var span = document.getElementsByClassName("close")[0];

// triggering the click on button
btn.onclick = function() {
    modal.style.display = "block";
}

// triggering the x to close modal
span.onclick = function() {
    modal.style.display = "none";
}

