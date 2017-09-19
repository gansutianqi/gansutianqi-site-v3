<?php namespace Buuug7\News;

use Backend;
use System\Classes\PluginBase;

/**
 * News Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'buuug7.news::lang.plugin.name',
            'description' => 'buuug7.news::lang.plugin.description',
            'author'      => 'Buuug7',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'Buuug7\News\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return [
            'buuug7.news.access_posts' => [
                'tab' => '新闻',
                'label' => '管理新闻'
            ],
            'buuug7.news.access_categories' => [
                'tab' => '新闻',
                'label' => '管理新闻分类'
            ],
            'buuug7.news.access_other_posts' => [
                'tab' => '新闻',
                'label' => '管理别人发布的新闻',
            ],
            'buuug7.news.access_publish' => [
                'tab' => '新闻',
                'label' => '管理新闻审核',
            ],

        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return [
            'news' => [
                'label' => 'buuug7.news::lang.plugin.name',
                'url' => Backend::url('buuug7/news/posts'),
                'icon' => 'icon-newspaper-o',
                'permissions' => ['buuug7.news.*'],
                'sideMenu' => [
                    'new_post' => [
                        'label' => 'buuug7.news::lang.post.new_post',
                        'icon' => 'icon-plus',
                        'url' => Backend::url('buuug7/news/posts/create'),
                        'permissions' => ['buuug7.news.access_posts'],
                    ],
                    'posts' => [
                        'label' => 'buuug7.news::lang.news.posts',
                        'icon' => 'icon-copy',
                        'url' => Backend::url('buuug7/news/posts'),
                        'permissions' => ['buuug7.news.access_posts'],
                    ],
                    'categories' => [
                        'label' => 'buuug7.news::lang.news.categories',
                        'icon' => 'icon-list-ul',
                        'url' => Backend::url('buuug7/news/categories'),
                        'permissions' => ['buuug7.news.access_posts'],
                    ],
                ],
            ],
        ];
    }
}
