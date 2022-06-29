<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('content-type: application/json'); 

require 'config.php';
require 'functions.php';
require 'libs/Database.php';
require 'libs/Auth.php';
require 'libs/Model.php';
require 'libs/Models/UserModel.php';

$connection = require 'connection.php';
$module     = isset($_GET['module']) && !empty($_GET['module']) ? $_GET['module'] : 'index';

// module http request validation
$modules    = require 'modules.php';
$requestMod = isset($modules[$module]) ? $modules[$module] : false;

if(!$requestMod)
{
    $result = response('fail','Module Not Found');
}
elseif(strtolower($_SERVER['REQUEST_METHOD']) != strtolower($requestMod))
{
    $result = response('fail','Method '.$_SERVER['REQUEST_METHOD'].' is not support for this module');
}
else
{
    $result = file_exists('modules/'.$module.'.php') ? require 'modules/'.$module.'.php' : response('fail','Module not found');
}


if(is_array($result) || is_object($result))
{
    echo json_encode($result);
}
else
{
    echo $result;
}

die();