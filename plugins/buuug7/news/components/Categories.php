<?php namespace Buuug7\News\Components;

use Cms\Classes\ComponentBase;
use Buuug7\News\Models\Category as CategoryModel;

class Categories extends ComponentBase
{
    public $categories;
    public $currentCategorySlug;
    public $categoryPage;

    public function componentDetails()
    {
        return [
            'name' => 'Categories Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function defineProperties()
    {
        return [
            'slug' => [
                'title' => 'category slug',
                'description' => 'category slug',
                'default' => '{{ :category }}',
                'type' => 'string',
            ],
            'categoryPage' => [
                'title' => 'category page',
                'description' => 'category page description',
                'type' => 'string',
                'default' => 'news/posts',
            ],
        ];
    }

    public function onRun()
    {
        $this->currentCategorySlug = $this->page['currentCategorySlug'] = $this->property('slug');
        $this->categoryPage = $this->page['categoryPage'] = $this->property('categoryPage');
        $this->categories = $this->loadCategories();
    }


    protected function loadCategories()
    {
        $categories = CategoryModel::getNested();
        $this->linkCategories($categories);
        return $categories;
    }

    protected function linkCategories($categories)
    {
        return $categories->each(function ($category) {
            $category->setUrl($this->categoryPage, $this->controller);
            if ($category->children) {
                $this->linkCategories($category->children);
            }
        });
    }


}
