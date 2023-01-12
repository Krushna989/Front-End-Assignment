document.addEventListener("DOMContentLoaded", function() {
  // Handle color swatch button clicks
  var colorSwatchButtons = document.querySelectorAll(".color-swatch");
  for (var i = 0; i < colorSwatchButtons.length; i++) {
    colorSwatchButtons[i].addEventListener("click", function() {
      var color = this.getAttribute("data-color");
      document.querySelector("#umbrella").src = "images/umbrella-" + color + ".png";
    });
  }

  // Handle logo file input
  var logoInput = document.querySelector("#logo-input");
  logoInput.addEventListener("change", function() {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      document.querySelector("#logo").src = reader.result;
    }
    reader.readAsDataURL(file);
  });
