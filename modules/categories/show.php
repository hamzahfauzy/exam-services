<?php

/**
 * show single detail category with posts and their items
 * then suffle the items
 */

$conn = getConnection();

// validation categories
// id is required
if(!isset($_GET['id']) || empty($_GET['id']))
{
    return response('fail','the field id must be required');
}

// id is exists
$id    = $_GET['id'];
$query = $conn->query("SELECT * FROM categories WHERE id=$id");
if(!$query->num_rows)
{
    return response('fail','the given id is invalid');
}

// show the record
$result = $query->fetch_object();

return response('success','category retrieved', $result);