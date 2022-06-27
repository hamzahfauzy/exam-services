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

if($answer_exists)
{
    $db->update('exam_answers',[
        'answer_id'   => $data['answer_id']
    ], $params);
}
else
{
    $db->insert('exam_answers', array_merge($params,['answer_id' => $data['answer_id']]));
}

return response('success','answer saved');