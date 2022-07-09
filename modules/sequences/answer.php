<?php

/**
 * save participant answer to database
 * @param exam_id
 * @param question_id
 * @param answer_id
 * 
 */

$user = auth()->user(); // run as middleware too

// exam_id validation
if(!isset($_POST['exam_id']) || empty($_POST['exam_id']))
{
    return response('fail','exam_id field is required');
}

// question_id validation
if(!isset($_POST['question_id']) || empty($_POST['question_id']))
{
    return response('fail','question_id field is required');
}

// answer_id validation
if(!isset($_POST['answer_id']) || empty($_POST['answer_id']))
{
    return response('fail','answer_id field is required');
}

$conn  = getConnection();
$db    = new Database($conn);

$data   = $_POST;
$params = [
    'participant_id' => $user->participant->id,
    'exam_id'     => $data['exam_id'],
    'question_id' => $data['question_id'],
];
$answer_exists = $db->single('exam_answers',$params);

$value = [
    'answer_id' => $data['answer_id'],
    'answer_content' => $data['answer_id'],
];

if(!is_int($data['answer_id']))
{
    unset($value['answer_id']);
}

if($answer_exists)
{
    $db->update('exam_answers', $value, $params);
}
else
{
    $value['created_at'] = date('Y-m-d H:i:s');
    $db->insert('exam_answers', array_merge($params,$value));
}

return response('success','answer saved');