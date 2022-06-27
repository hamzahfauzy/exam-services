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
$jurusan = $user->participant->study;
$params  = params();
$group_id   = $exam->test_group;
$test_group = $params['test_group'];
$test_group = $test_group[$group_id];
$tools      = $test_group['tools'];
$in         = '"'.implode('","',$tools).'"';

$categories = $db->all('categories',[
    'test_tool' => ['IN',"(".$in.")"]
],[
    'sequenced_number'=>'asc'
]);

return response('success','categories retrieved', $categories);