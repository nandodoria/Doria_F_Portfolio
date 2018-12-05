<?php 


function send_email(){

    //Email Validations : checking required fields

    if(empty($_POST['name'])
        || empty($_POST['email'])
        || empty($_POST['message'])){

            echo 'You are missing some required fields';
            exit;
        }

    $to = 'me@nandodoria.ca';
    $name = 'This is an email from '.$_POST['name'];
    $subject = 'Subject: '.$_POST['subject'];
    $message = 'Message Body: '.$_POST['message'];
    $headers = 'From: noreply@nandodoria.ca ';
    $headers .= 'Reply-To: ' .$POST['email'];

    mail($to, $name, $subject, $message, $headers);
    //IN your server use the following line instead
    //mail($to, $subject, $message, $headers);
}

send_email();

?>