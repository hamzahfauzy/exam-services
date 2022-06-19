<?php

function getConnection()
{
    global $connection;

    return $connection;
}

function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function response($status, $msg, $data = [])
{
    return [
        'status'  => $status,
        'message' => $msg,
        'data'    => $data
    ];
}