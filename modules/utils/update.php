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

// data is required
if(!isset($_POST['data']) && empty($_POST['data']))
{
    return response('fail','the data field is required');
}

// data is array
if(!is_array($_POST['data']))
{
    return response('fail','the data must be an array');
}

$table = $_GET['table'];
$key   = $_GET['key'];
$value = $_GET['value'];

$conn  = getConnection();
$db    = new Database($conn);
$data  = $_POST['data'];

$result = $db->update($table,$data,
[
    $key => $value
]);

return response('success', $table.' retrieved', $result);