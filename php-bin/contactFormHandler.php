<?php
  $errors = '';
  $myemail = 'demiladeolagoke@yahoo.ca';
  $my_feedbackmail = "noreply@demiolagoke.com";
  if(empty($_POST['email']) || empty($_POST['message']))
  {
      $errors .= "\n Error: All fields are required";
  }
  $email_address = $_POST['email'];
  $message = $_POST['message'];
  if (!preg_match(
  "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
  $email_address))
  {
      $errors .= "\n Error: Invalid email address";
  }

  if( empty($errors))
  {
    $to = $myemail;
    $email_subject = "Contact form submission";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Email: $email_address\n Message: \n $message";
    $headers = "From: $my_feedbackmail\n";
    $headers .= "Reply-To: $email_address";
    $mail = mail($to,$email_subject,$email_body,$headers);
    if ($mail)
    {
        echo "Message successfully sent!";
        header('Location: ../index.html');
    }
    else
    {
        echo "Message delivery failed. Please try again." ;
    }
  }
  //redirect to the 'thank you' page
  //header('Location: ../pages.contact.html');
?>
