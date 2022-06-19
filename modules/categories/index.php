<?php

/**
 * get all categories data by exam id
 * for own exam tools with descending order by sequence number
 */

$conn = getConnection();

$query  = $conn->query("SELECT * FROM categories");

$result = json_decode(json_encode($query->fetch_all(MYSQLI_ASSOC)));

return response('success','categories retrieved', $result);