<?php

/**
 * get categories via exam test tools
 * @param $exam_id from $_GET
 */

$user = auth()->user(); // run as middleware too

// exam_id validation
if(!isset($_GET['exam_id']) || empty($_GET['exam_id']))
{
    return response('fail','exam_id field is required');
}

$conn  = getConnection();
$db    = new Database($conn);

$exam_id = $_GET['exam_id'];
$exam    = $db->single('exams',['id'=>$exam_id]);

$groups  = $db->all('group_items',['group_id' => $exam->group_id],['sequenced_number'=>'ASC']);
$groups  = array_map(function($g){ return $g->category_id; }, $groups);
$in      = implode(',', $groups);

$categories = $db->all('categories',[
    'id' => ['IN',"(".$in.")"]
],[
    'field'=>"(id,".$in.")"
]);

return response('success','categories retrieved', $categories);