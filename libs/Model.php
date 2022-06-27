<?php

class Model {

    public function db(){
        $conn = getConnection();
        return new Database($conn);
    }

}