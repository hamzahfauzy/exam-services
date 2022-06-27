<?php

class UserModel extends Model {

    public $participant = null;

    function __construct($user){

        foreach($user as $key => $value)
        {
            $this->{$key} = $value;
        }
        
        $this->participant = $this->db()->single('participants',['user_id'=>$user->id]);
    }

}