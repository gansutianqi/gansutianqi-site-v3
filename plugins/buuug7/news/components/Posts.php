<?php namespace Buuug7\News\Components;

use Cms\Classes\ComponentBase;
use Buuug7\News\Models\Post as PostModel;
use Buuug7\News\Models\Category as CategoryModel;

class Posts extends ComponentBase
{
    public $posts;
    public $category;
    public $postPage;

    public function componentDetails()
    {
        return [
            'name' => 'buuug7.news::lang.posts.posts_component_name',
            'description' => 'buuug7.news::lang.posts.posts_component_description'
        ];
    }

    public function defineProperties()
    {
        return [
            'page' => [
                'title' => 'buuug7.news::lang.posts.pageNumber',
                'description' => 'buuug7.news::lang.posts.page_number_description',
                'type' => 'string',
                'default' => '{{ :page }}',
            ],
            'postsPerPage' => [
                'title' => 'buuug7.news::lang.posts.posts_per_page',
                'description' => 'buuug7.news::lang.posts.posts_per_page_description',
                'type' => 'string',
                'validationPattern' => '^[0-9]+$',
                'default' => '10',
            ],
            'category' => [
                'title' => 'buuug7.news::lang.posts.category',
                'description' => 'buuug7.news::lang.posts.category_description',
                'type' => 'string',
                'default' => '{{ :category }}',
            ],
            'postPage' => [
                'title' => 'buuug7.news::lang.posts.post_page',
                'description' => 'buuug7.news::lang.posts.post_page_description',
                'type' => 'string',
                'default' => 'news/post',
            ],
        ];
    }

    public function onRun()
    {
        $this->postPage=$this->page['postPage']=$this->property('postPage');

        $this->category = $this->page['category'] = $this->loadCategory();
        $this->posts = $this->page['posts'] =  $this->listPosts();

    }

    public function listPosts()
    {
        $category = $this->category ? $this->category->id : null;

        $posts = PostModel::listFrontend([
            'page' => $this->property('page'),
            'postsPerPage' => $this->property('postsPerPage'),
            'category' => $category,
            'search' => input('search'),
            'published' => true,
        ]);

        $posts->each(function($post){
            $post->setUrl($this->postPage,$this->controller);

        });

        return $posts;
    }

    public function loadCategory(){
        $slug = $this->property('category');
        if(!$slug){
            return null;
        }
        $category = CategoryModel::where('slug',$slug)->first();
        return $category;
    }

}
