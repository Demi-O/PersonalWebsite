'use strict'

var picNumber = 0;
var drawing_img = document.getElementById('drawing_img');
var dancing_img = document.getElementById('dancing_img');

window.addEventListener('load', function(){
  // HOBBIES
  //window.setInterval(changePictures, 5000);

  // CONTACT
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
  drawing_img.src = "../images/drawing" + picNumber % 2 + ".jpg";
  dancing_img.src = "../images/dancing" + picNumber % 2 + ".jpg";
}
