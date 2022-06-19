<?php

// validation
// table is required
if(!isset($_GET['table']) && empty($_GET['table']))
{
    return response('fail','the table field is required');
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

$conn  = getConnection();
$db    = new Database($conn);
$data  = $_POST['data'];

$result = $db->insert($table,$data);

return response('success', $table.' insert success', $result);