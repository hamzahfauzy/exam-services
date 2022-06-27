<?php

/**
 * get categories via exam test tools
 * @param $exam_id from $_GET
 */

$user = auth()->user(); // run as middleware too

// exam_id validation
if(!isset($_GET['category_id']) || empty($_GET['category_id']))
{
    return response('fail','category_id field is required');
}

$conn  = getConnection();
$db    = new Database($conn);

$category_id = $_GET['category_id'];
$jurusan     = $user->participant->study;
$category    = $db->single('categories',['id' => $category_id]);

$category_posts = $db->all('category_posts',['category_id' => $category_id]);
foreach($category_posts as $category_post)
{
    $post = $db->single('posts',['id' => $category_post->post_id]);
    $post_items = $db->all('post_items',['parent_id'=>$post_id]);
    foreach($post_items as $post_item)
    {
        $post->items[] = $db->single('posts',['id'=>$post_item->child_id]);
    }
    
    if(isset($post->items) && $category->test_tool == 'TPA')
        $post->items = shuffle($post->items);
    
    $category->posts[] = $post;
    
    if(isset($_GET['demo']) && $_GET['demo']) break;
}

return response('success','single category retrieved',$category);