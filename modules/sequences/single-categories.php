<?php

/**
 * get categories via exam test tools
 * @param $exam_id from $_GET
 */

$user = auth()->user(); // run as middleware too

// category_id validation
if(!isset($_GET['category_id']) || empty($_GET['category_id']))
{
    return response('fail','category_id field is required');
}

// exam_id validation
if(!isset($_GET['exam_id']) || empty($_GET['exam_id']))
{
    return response('fail','exam_id field is required');
}

$conn  = getConnection();
$db    = new Database($conn);

$participant = $user->participant;
$category_id = $_GET['category_id'];
$exam_id     = $_GET['exam_id'];
$jurusan     = $user->participant->study;
$category    = $db->single('categories',['id' => $category_id]);

$category_posts = $db->all('category_post',['category_id' => $category_id]);
foreach($category_posts as $category_post)
{
    $post = $db->single('posts',['id' => $category_post->post_id]);
    $post_items = $db->all('post_items',['parent_id'=>$post->id]);
    foreach($post_items as $post_item)
    {
        // get item query
        $query = "SELECT posts.*";
        if(!isset($_GET['demo']))
        {
            $query .= ", (SELECT COUNT(*) FROM exam_answers WHERE exam_answers.exam_id=$exam_id AND exam_answers.question_id=$post->id AND exam_answers.answer_content=posts.id AND exam_answers.answer_content REGEXP '^[0-9]+$' AND exam_answers.participant_id=$participant->id) as selected";
        }

        $query .= " FROM posts WHERE posts.id = $post_item->child_id";
        $db->query = $query;
        $item = $db->exec('single');
        
        $post->items[] = $item;
    }
    
    if(isset($post->items) && $category->test_tool == 'TPA')
    {
        shuffle($post->items);
    }
    
    $category->posts[] = $post;
    
    if(isset($_GET['demo']) && $_GET['demo']) break;
}

return response('success','single category retrieved',$category);