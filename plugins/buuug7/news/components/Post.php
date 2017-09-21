<?php namespace Buuug7\News\Components;

use Cms\Classes\ComponentBase;

class Post extends ComponentBase
{
    public $post;

    public function componentDetails()
    {
        return [
            'name'        => 'buuug7.news::lang.post.post_component_name',
            'description' => 'buuug7.news::lang.post.post_component_description'
        ];
    }

    public function defineProperties()
    {
        return [];
    }
}
