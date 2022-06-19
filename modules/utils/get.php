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

$table = $_GET['table'];
$conn  = getConnection();
$db    = new Database($conn);

$result = $db->all($table);

return response('success',$table.' retrieved',$result);