<?php

$conn = getConnection();

$username = $_POST['username'];

$query    = $conn->query("SELECT * FROM user WHERE username='$username'");

if(!$query->num_rows)
{
    return response('fail','User not found');
}

$result   = $query->fetch_object();
$auth_key = generateRandomString();
$conn->query("UPDATE user set auth_key = '$auth_key' WHERE id = $result->id");

return response('success','user valid', [
    'auth_key' => $auth_key
]);