if($("#mobile-menu-container").css("display") != "none") {
    var transitionSpeed = 300;
  
    $(".hamburger").click(function() {
      if($("#mobile-menu-container.left").length) {
        if($(".hamburger.is-active").length == 0) {
            $(".menu-icon .hamburger").addClass("is-active");
            $("#mobile-menu-container.left").animate({left: '0'},transitionSpeed);
            $("#shadow-glass").fadeIn(transitionSpeed);
        } else { 
            $(".menu-icon .hamburger").removeClass("is-active");
            $("#mobile-menu-container.left").animate({left: '-300px'},transitionSpeed);
            $("#shadow-glass").fadeOut(transitionSpeed);
        }
      };
      if($("#mobile-menu-container.right").length) {
        if($(".hamburger.is-active").length == 0) {
            $(".menu-icon .hamburger").addClass("is-active");
            $("#mobile-menu-container.right").animate({right: '0'},transitionSpeed);
            $("#shadow-glass").fadeIn(transitionSpeed);
        } else { 
            $(".menu-icon .hamburger").removeClass("is-active");
            $("#mobile-menu-container.right").animate({right: '-300px'},transitionSpeed);
            $("#shadow-glass").fadeOut(transitionSpeed);
        }
      };
    });
  
    $("#shadow-glass").click(function() {
        $(".menu-icon .hamburger").removeClass("is-active");
        $("#mobile-menu-container.left").animate({left: '-300px'},transitionSpeed);
        $("#mobile-menu-container.right").animate({right: '-300px'},transitionSpeed);
        $("#shadow-glass").fadeOut(transitionSpeed);
    });
  }


// nav bar scoll effect 

// Select the navbar element
// const navbar = document.querySelector(".top-main-box");

// // Initial scroll position
// let prevScrollPos = window.pageYOffset;

// // Function to check and update the navbar visibility
// function toggleNavbar() {
//     const currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//         // Scrolling up, show the navbar
//         navbar.style.transform = "translateY(0)";
//     } else {
//         // Scrolling down, hide the navbar
//         navbar.style.transform = "translateY(-100%)";
//     }

//     prevScrollPos = currentScrollPos;
// }

// // Add a scroll event listener to the window
// window.addEventListener("scroll", toggleNavbar);


window.addEventListener('scroll', function (){
  var navbar = this.document.querySelector(".sticky-nav-custom");
  navbar.classList.toggle("sticky", this.window.scrollY > 15)
})