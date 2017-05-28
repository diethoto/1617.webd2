getModal("myImg1");
getModal("myImg2");
getModal("myImg3");
getModal("myImg4");
getModal("myImg5");
getModal("myImg6");
getModal("myImg7");
getModal("myImg8");
getModal("myImg9");
getModal("myImg10");
// Get the modal
function getModal(idName){
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById(idName);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
modal.onclick = function(){
    modal.style.display = "none";
}
}