<?php

return [
    'index' => 'GET',

    'auth/login' => 'POST',

    'dashboard/index' => 'GET',

    'categories/index' => 'GET',
    'categories/show'  => 'GET',
    'categories/show-demo'  => 'GET',

    'sequences/index'  => 'GET',
    'sequences/start'  => 'POST',
    'sequences/answer' => 'POST',
    'sequences/finish' => 'PATCH',

    'utils/delete' => 'DELETE',
    'utils/get'    => 'GET',
    'utils/insert' => 'POST',
    'utils/update' => 'PUT',
    'utils/single' => 'GET',
];