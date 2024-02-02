
  // script.js
document.getElementById("infoIcon").onclick = function() {
    document.getElementById("infoPopup").style.display = "block";
  };
  
  document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("infoPopup").style.display = "none";
  };
  
  // Fermer le popup en cliquant en dehors de celui-ci
  window.onclick = function(event) {
    var popup = document.getElementById("infoPopup");
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
  