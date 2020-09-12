<?php

$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$message = $_POST['message'];
$variable = "";

//datos para envio de email
$para = "contact@dessinstudio.com";
$asunto = "Correo del portafolio";
$mensaje = "<p>";
$mensaje.= "Nombre: ".$name."\r\n<br>";
$mensaje.= "Empresa: ".$company."\r\n<br>";
$mensaje.= "Email: ".$email."\r\n<br>";
$mensaje.= "Mensaje: ".$message."\r\n</p>";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: <portafolio@dessinstudio.com>' . "\r\n";

if(mail($para, $asunto, $mensaje, $headers)){
    $variable = "true";
}else{
    $variable = "false";
}

// echo json_encode('nombre'.$name. ' empresa: '.$company. ' email: '.$email.' mensaje: '.$message);
echo json_encode($variable);

?>