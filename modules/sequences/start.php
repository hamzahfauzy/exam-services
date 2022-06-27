<?php

/**
 * save participant information and set status to start
 * @param user_metas array from post
 * @param exam_id integer from post
 */

$user = auth()->user(); // run as middleware too

// user_metas validation
if(!isset($_POST['user_metas']) || empty($_POST['user_metas']))
{
    return response('fail','user_metas field is required');
}

// user_metas value validation
if(!is_array($_POST['user_metas']))
{
    return response('fail','user_metas field must be an array');
}

// exam_id validation
if(!isset($_POST['exam_id']) || empty($_POST['exam_id']))
{
    return response('fail','exam_id field is required');
}

$conn  = getConnection();
$db    = new Database($conn);

$data = $_POST;
$user_metas = $data['user_metas'];
foreach($user_metas as $key => $value)
{
    $db->insert('user_metas',[
        'user_id'  => $user->id,
        'meta_key' => $key,
        'meta_value' => $value
    ]);
}

$participant = $user->participant;

if(isset($user_metas['tanggal_lahir']))
{
    $db->update('participants',[
        'birthdate' => $user_metas['tanggal_lahir']
    ],[
        'id' => $participant->id
    ]);
}

$db->update('exam_participants',[
    'status' => 'start',
    'started_at' => date('Y-m-d H:i:s')
],[
    'participant_id' => $participant->id,
    'exam_id'        => $data['exam_id'],
]);

return response('success','exam started');