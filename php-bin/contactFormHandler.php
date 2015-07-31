<?php
  if(isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];
    switch($action){
      case 'mail' : sendMail($_POST['email'], $_POST['message']); break;
    }
  }

  function sendMail($email_address, $message){
    $errors = '';
    $myemail = 'demiladeolagoke@yahoo.ca';
    $my_feedbackmail = "noreply@demiolagoke.com";
    if(empty($email_address) || empty($message))
    {
        $errors .= "\n Error: All fields are required";
    }
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
          // header('Location: ../index.html');
      }
      else
      {
          echo "Message delivery failed. Please try again." ;
      }
    }
  }
?>
