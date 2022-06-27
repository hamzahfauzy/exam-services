<?php

/**
 * update participant information and set to finish
 * @param exam_id integer from post
 */

$user = auth()->user(); // run as middleware too

// exam_id validation
if(!isset($_POST['exam_id']) || empty($_POST['exam_id']))
{
    return response('fail','exam_id field is required');
}

$conn  = getConnection();
$db    = new Database($conn);

$data  = $_POST;

$participant = $user->participant;

$db->update('exam_participants',[
    'status' => 'finish',
    'finished_at' => date('Y-m-d H:i:s')
],[
    'participant_id' => $participant->id,
    'exam_id'        => $data['exam_id'],
]);

return response('success','exam finished');