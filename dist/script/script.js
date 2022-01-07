$(document).ready(function () {
  //Get the button:
  // mybutton = $(".totop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      //$(".totop").removeClass("hidden");
      $(".totop").removeClass("opacity-0");
      $(".totop").addClass("opacity-100");
      $(".navparent").addClass("bg-white shadow-sm");
      $(".navparent").removeClass("bg-transparent");
    } else {
      //$(".totop").addClass("hidden");
      $(".totop").addClass("opacity-0");
      $(".totop").removeClass("opacity-100");
      $(".navparent").removeClass("bg-white shadow-sm");
      $(".navparent").addClass("bg-transparent");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
});
function top_function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// grab everything we need

const htmlParent = document.getElementById("htmlparent");
$darkbtn = $("#darkmode");
$darkbtnM = $("#darkmodemobile");
$darkbtn.click(function () {
  htmlParent.classList.toggle("dark");
  $darkbtn.toggleClass("bg-red-400");
});
$darkbtnM.click(function () {
  htmlParent.classList.toggle("dark");
  $darkbtnM.toggleClass("bg-red-400");
});

/* Open when someone clicks on the span element */
const mynav = document.getElementById("myNav");
const burger = document.querySelector(".hamburger-menu");

// Event listeners
burger.addEventListener("click", () => {
  burger.classList.toggle("bar-change");
  mynav.classList.toggle("w-0");
  mynav.classList.toggle("w-72");
});
let pageHeight = window.innerHeight;

let scrollDownBtn = document.getElementById("scrollDown");
scrollDownBtn.addEventListener("click", function () {
  window.scrollBy(0, pageHeight - pageHeight / 6);
});
