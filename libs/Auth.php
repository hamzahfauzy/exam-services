<?php

class Auth {

    static $header = "";

    static function setHeader($header)
    {
        self::$header = $header;

        return new static;
    }

    static function user()
    {
        $conn  = getConnection();
        $db    = new Database($conn);

        $db->query = "SELECT id, username, email, status FROM user WHERE auth_key = '".self::$header."'";

        $user  = $db->exec('single');
        if($user)
        {
            return new UserModel($user);
        }

        return false;

    }

}