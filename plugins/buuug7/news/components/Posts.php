<?php namespace Buuug7\News\Components;

use Cms\Classes\ComponentBase;
use Buuug7\News\Models\Post as PostModel;
use Buuug7\News\Models\Category as CategoryModel;
use Illuminate\Support\Facades\Redirect;

class Posts extends ComponentBase
{
    public $posts;
    public $category;
    public $postPage;
    public $categoryPage;

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
                'title' => 'buuug7.news::lang.posts.page',
                'description' => 'buuug7.news::lang.posts.page_description',
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
            'categoryPage' => [
                'title' => 'buuug7.news::lang.posts.category_page',
                'description' => 'buuug7.news::lang.posts.category_page_descrption',
                'type' => 'string',
                'default' => 'news/posts',
            ],
        ];
    }

    public function onRun()
    {
        $this->postPage = $this->page['postPage'] = $this->property('postPage');
        $this->categoryPage = $this->page['categoryPage'] = $this->property('categoryPage');

        $this->category = $this->page['category'] = $this->loadCategory();

        if (!$this->category) {
            return;
        }

        $this->posts = $this->page['posts'] = $this->listPosts();

        /*
         * If the page number is not valid,redirect
         * */
        $currentPage = input('page');

        $lastPage = $this->posts->lastPage();
        if ($currentPage > $lastPage && $currentPage > 1) {
            //dd($currentPage);
            return Redirect::to($this->currentPageUrl() . '?page=' . $lastPage);
        }


    }

    public function listPosts()
    {
        $category = $this->category ? $this->category->id : null;

        $posts = PostModel::with('categories')->listFrontend([
            'page' => $this->property('page'),
            'postsPerPage' => $this->property('postsPerPage'),
            'category' => $category,
            'search' => input('search'),
            'published' => true,
        ]);

        $posts->each(function ($post) {
            $post->setUrl($this->postPage, $this->controller);
            $post->categories->each(function ($category) {
                $category->setUrl($this->categoryPage, $this->controller);
            });
        });
        return $posts;
    }

    public function loadCategory()
    {
        $slug = $this->property('category');
        if (!$slug) {
            return null;
        }
        $category = CategoryModel::where('slug', $slug)->first();
        return $category;
    }

}
