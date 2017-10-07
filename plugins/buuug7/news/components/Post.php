<?php namespace Buuug7\News\Components;

use Cms\Classes\ComponentBase;
use Buuug7\News\Models\Post as PostModel;

class Post extends ComponentBase
{
    public $post;

    public function componentDetails()
    {
        return [
            'name' => 'buuug7.news::lang.post.post_component_name',
            'description' => 'buuug7.news::lang.post.post_component_description'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'title' => 'buuug7.news::lang.post.slug',
                'description' => 'buuug7.news::lang.post.slug_description',
                'default' => '{{ :slug }}',
                'type' => 'string',
            ],
        ];
    }

    public function onRun()
    {
        $this->post = $this->page['post'] = $this->loadPost();
    }

    protected function loadPost()
    {
        $slug = $this->property('slug');
        $post = PostModel::where('slug', $slug)->isPublished()->first();
        return $post;
    }



}
