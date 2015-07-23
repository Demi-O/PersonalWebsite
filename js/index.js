"use strict"

var picNumber = 0;
var navbarTransparencyHeight = 150;
var navbarTransparency = false;
var animatingNavbar = false;
var linkBorderBottom = "2px solid white";
var linkTopOffset = 100;

window.addEventListener("load", function(){
  //NAV BAR
  if ($(window).scrollTop() <= navbarTransparencyHeight){
    $("#nav_bar").css("background-color", "rgba(47, 79, 79, 0)");
  }
  else{
    $("#nav_bar").css("background-color", "rgba(47, 79, 79, 0.7)");
  }

  $("#nav_bar li").click(function(){
    var id = this.id;
    if(id == "home_link"){
      $("html,body").animate({scrollTop: $("#home").offset().top - 80}, 1100);
    }
    else if(id == "about_link"){
      $("html,body").animate({scrollTop: $("#about").offset().top - 80}, 1100);
    }
    else if(id == "experience_link"){
      $("html,body").animate({scrollTop: $("#experience").offset().top - 80}, 1100);
    }
    else if(id == "hobbies_link"){
      $("html,body").animate({scrollTop: $("#hobbies").offset().top - 80}, 1100);
    }
    else if(id == "connect_link"){
      $("html,body").animate({scrollTop: $("#connect").offset().top - 80}, 1100);
    }
  });

  $("#nav_bar li").hover(
    function() {
      if ( $(window).width() > 760) {
        $(this).children("a").css("font-size", "20px");
      }
    }, function() {
      if ( $(window).width() > 760){
        $( this ).children("a").css("font-size", "17px");
      }
    }
  );

  //EXPERIENCE
  $(".exp_full").hide();
  //div drops
  $(".exp_img").click(function(){
    //experience drops
    var id = this.id;
    if(id == "snake_image"){
      $(".exp_full").not("#exp_full_snake").slideUp();
      $("#exp_full_snake").slideToggle();
    }
    else if(id == "pWebsite_image"){
      $(".exp_full").not("#exp_full_pWebsite").slideUp();
      $("#exp_full_pWebsite").slideToggle();
    }
    else if(id == "URA_image"){
      $(".exp_full").not("#exp_full_URA").slideUp();
      $("#exp_full_URA").slideToggle();
    }
    else if(id == "mabels_image"){
      $(".exp_full").not("#exp_full_mabels").slideUp();
      $("#exp_full_mabels").slideToggle();
    }
    else if(id == "blackberry_image"){
      $(".exp_full").not("#exp_full_blackberry").slideUp();
      $("#exp_full_blackberry").slideToggle();
    }
    else if(id == "tictac_image"){
      $(".exp_full").not("#exp_full_tictac").slideUp();
      $("#exp_full_tictac").slideToggle();
    }
    else if(id == "fortune_image"){
      $(".exp_full").not("#exp_full_fortune").slideUp();
      $("#exp_full_fortune").slideToggle();
    }

    //plus to minus
    var htmlString = $(this).find(".exp_info").html();
    if(htmlString.indexOf("<h3>+</h3>") > -1){
      $(".exp_img").find(".exp_info").html("<h3>+</h3>");
      $(this).find(".exp_info").html("<h3>-</h3>");
      $("html,body").animate({scrollTop: $(this).offset().top - 10}, 800);
    }
    else{
      $(this).find(".exp_info").html("<h3>+</h3>");
      $("html,body").animate({scrollTop: $(this).offset().top - 100}, 700);
    }
  });

  // HOBBIES
  window.setInterval(changePictures, 5000);

  // CONTACT
  $("#contact_form").hide();
  //clicks
  $(".connect_div").click(function(){
    var id = this.id;
    if(id == "linkedin_connect"){
      window.location.href = "https://ca.linkedin.com/pub/demi-olagoke/47/257/583";
    }
    else if(id == "github_connect"){
      window.location.href = "https://github.com/Demi-O";
    }
    else if(id == "instagram_connect"){
      window.location.href = "https://instagram.com/demiolagoke/";
    }
    else if(id == "message_connect"){
      $("#contact_form").slideToggle();
      if($("#contact_form").is(":visible")) {
        $("html,body").animate({scrollTop: $("#message_connect").offset().top + 50}, 400);
      }
      else{
        $("html,body").animate({scrollTop: $("#message_connect").offset().top}, 300);
      }
    }
  });
  //animations
  $(".connect_div").hover(
    function(){
      $(this).stop().animate({"bottom":"20px"}, 500);
    },
    function(){
      $(this).stop().animate({"bottom":"0px"}, 400);
  });

  var formValidator = new Validator("contact_form");
  //Name
  formValidator.addValidation("name", "req", "Please provide your name");
  formValidator.addValidation("name", "maxlen=40", "Max lenght for Name is 40 characters");
  //Email
  formValidator.addValidation("email", "req", "Please provide your email address");
  formValidator.addValidation("email", "email", "Please enter a valid email address");
  //Phone Number
  formValidator.addValidation("phone_number", "num", "Please enter only numbers in Number");
  //Message
  formValidator.addValidation("message","req", "Please enter a message");
  formValidator.addValidation("message", "maxlen=400", "Max length for a message is 400 characters");
});

$(window).scroll(function(){
  if ($(window).scrollTop() <= navbarTransparencyHeight && navbarTransparency == false &&
  animatingNavbar == false) {
    navbarTransparency = true;
    animatingNavbar = true;
    $("#nav_bar").stop().animate({backgroundColor:  "rgba(47, 79, 79, 0)"}, 350, function() {
    	animatingNavbar = false;
    });
  }
  else if ($(window).scrollTop() > navbarTransparencyHeight && navbarTransparency == true &&
  animatingNavbar == false){
    navbarTransparency = false;
 	  animatingNavbar = true;
  	$("#nav_bar").stop().animate({backgroundColor:  "rgba(47, 79, 79, 0.7)"}, 300, function() {
  		animatingNavbar = false;
  	});
 	}

  //Link border bottom loop
  //from bottom to top
  if($(this).scrollTop() >= $("#hobbies").position().top - linkTopOffset){
    $("#nav_bar li").css("border-bottom", "2px solid transparent");
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $("#connect_link").css("border-bottom", linkBorderBottom);
    }
    else{
      $("#hobbies_link").css("border-bottom", linkBorderBottom);
    }
  }
  else if($(this).scrollTop() >= $("#experience").position().top - linkTopOffset){
    $("#nav_bar li").css("border-bottom", "2px solid transparent");
    $("#experience_link").css("border-bottom", linkBorderBottom);
  }
  else if($(this).scrollTop() >= $("#about").position().top - linkTopOffset){
    $("#nav_bar li").css("border-bottom", "2px solid transparent");
    $("#about_link").css("border-bottom", linkBorderBottom);
  }
  else if($(this).scrollTop() >= $("#home").position().top - linkTopOffset){
    $("#nav_bar li").css("border-bottom", "2px solid transparent");
    $("#home_link").css("border-bottom", linkBorderBottom);
  }
});

var changePictures = function(){
  picNumber++;
  $("#drawing_img").css("background-image", "url(images/drawing" + picNumber % 2 + ".jpg)");
  //dancing_img.src = "images/dancing" + picNumber % 2 + ".jpg";
}
