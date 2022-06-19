<?php

/**
 * utils get data for all database by their table name
 */

// validation
// table is required
if(!isset($_GET['table']) && empty($_GET['table']))
{
    return response('fail','the table field is required');
}

// key is required
if(!isset($_GET['key']) && empty($_GET['key']))
{
    return response('fail','the key field is required');
}

// value is required
if(!isset($_GET['value']) && empty($_GET['value']))
{
    return response('fail','the value field is required');
}

$table = $_GET['table'];
$key   = $_GET['key'];
$value = $_GET['value'];

$conn  = getConnection();
$db    = new Database($conn);

$db->delete($table,[
    $key => $value
]);

return response('success', $table.' delete '.$key.' = '.$value.' success', $result);