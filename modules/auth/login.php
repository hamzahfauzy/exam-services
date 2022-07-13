<?php

/**
 * login authentication
 * @param username from post
 */

// username validation
if(!isset($_POST['username']) || empty($_POST['username']))
{
    return response('fail','username field is required');
}

$conn = getConnection();

$username   = $_POST['username'];
$user_agent = $conn->real_escape_string($_POST['user_agent']);

$query      = $conn->query("SELECT * FROM user WHERE username='$username'");

if(!$query->num_rows)
{
    return response('fail','User not found');
}

$result   = $query->fetch_object();
$auth_key = generateRandomString();
$conn->query("UPDATE user set auth_key = '$auth_key', user_agent = '$user_agent' WHERE id = $result->id");

return response('success','user valid', [
    'auth_key' => $auth_key
]);