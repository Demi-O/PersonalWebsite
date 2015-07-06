'use strict'

var picNumber = 0;

window.addEventListener('load', function(){
  //EXPERIENCE
  $('.exp_full').hide();
  //div drops
  //2015
  $('#snake_image').click(function(){
    $('.exp_full').not('#exp_full_snake').slideUp();
    $('#exp_full_snake').slideToggle();
  });
  $('#pWebsite_image').click(function(){
    $('.exp_full').not('#exp_full_pWebsite').slideUp();
    $('#exp_full_pWebsite').slideToggle();
  });
  $('#URA_image').click(function(){
    $('.exp_full').not('#exp_full_URA').slideUp();
    $('#exp_full_URA').slideToggle();
  });
  //2014
  $('#mabels_image').click(function(){
    $('.exp_full').not('#exp_full_mabels').slideUp();
    $('#exp_full_mabels').slideToggle();
  });
  $('#blackberry_image').click(function(){
    $('.exp_full').not('#exp_full_blackberry').slideUp();
    $('#exp_full_blackberry').slideToggle();
  });
  //2013
  $('#tictac_image').click(function(){
    $('.exp_full').not('#exp_full_tictac').slideUp();
    $('#exp_full_tictac').slideToggle();
  });
  $('#fortune_image').click(function(){
    $('.exp_full').not('#exp_full_fortune').slideUp();
    $('#exp_full_fortune').slideToggle();
  });

  // HOBBIES
  window.setInterval(changePictures, 5000);

  // CONTACT
  $('#contact_form').hide();
  //clicks
  $('#linkedin_connect').click(function(){
    window.location.href = "https://ca.linkedin.com/pub/demi-olagoke/47/257/583";
  });
  $('#github_connect').click(function(){
    window.location.href = "https://github.com/Demi-O";
  });
  $('#instagram_connect').click(function(){
    window.location.href = "https://instagram.com/demiolagoke/";
  });
  $('#message_connect').click(function(){
    $('#contact_form').slideToggle();
  });
  //animations
  $('.connect_div').hover(function(){
    $(this).stop().animate({'margin-bottom':'60px'}, 700);
  }, function(){
    $(this).stop().animate({'margin-bottom':'30px'}, 500);
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


var changePictures = function(){
  picNumber++;
  $('#drawing_img').css('background-image', 'url(images/drawing' + picNumber % 2 + '.jpg)');
  //dancing_img.src = "images/dancing" + picNumber % 2 + ".jpg";
}
