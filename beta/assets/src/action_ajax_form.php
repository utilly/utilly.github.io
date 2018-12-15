<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["department"]) && isset($_POST["message"]) ) { 

	// Maiking array for JSON reply
    $result = array(
    	'name' => $_POST["name"],
    	'email' => $_POST["email"],
    	'department' => $_POST["department"],
    	'message' => $_POST["message"]
    ); 

    // encoding array in JSON
    echo json_encode($result); 
}

