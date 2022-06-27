<?php

/**
 * get information for dashboard from user with 
 * available exam lists
 */

$user = auth()->user(); // run as middleware too

$conn  = getConnection();
$db    = new Database($conn);

$participant = $db->single('participants',['user_id' => $user->id]);
$exams       = [];
            
if($participant)
{
    $examParticipants = $db->all('exam_participants',['participant_id' => $participant->id]);

    $now = strtotime('now');
    foreach($examParticipants as $examParticipant)
    {
        $exam = $db->single('exams',['id'=>$examParticipant->exam_id]);
        $exam->in_time = strtotime($exam->start_time) <= $now && strtotime($exam->end_time) >= $now;
        $examParticipant->exam = $exam;
    }

    $exams = $examParticipants;
}

return response('success','User retrieved', compact('participant','exams'));