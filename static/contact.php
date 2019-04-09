<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Content-Type");
		
	if(!isset($_POST['email'])) die("Forbidden.");

	$subject = 'Contact form submitted from '.$_POST['email'];
	$body =	'Name: '.$_POST['name'].'<br/>'.
            'Organization: '.$_POST['organization'].'<br/>'.
            'Email: <a href="mailto:'.$_POST['email'].'">'.$_POST['email'].'</a><br/>'.
            'Message: '.$_POST['message'].'<br>';
    
    sendMail($body, $subject);
    
    echo "success";

    function sendMail($content, $title){
        
		error_log("\n\n\n\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> SENDING MAIL >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		error_log("title:".$title);
		error_log("body:".$content);
		
		$headers = array("From: info@disarmamentsolutions.com",
			"Reply-To: info@disarmamentsolutions.com",
			"X-Mailer: PHP/" . PHP_VERSION,
			"Bcc: irvingedc@gmail.com",
			"MIME-Version: 1.0",
			"Content-Type: text/html; charset=UTF-8"
		);
		$headers = implode("\r\n", $headers);
		$to = "info@disarmamentsolutions.com";
		mail($to, $title, $content, $headers);
    }
    
?>