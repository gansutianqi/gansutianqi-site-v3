<?php

class SeedAllTables extends \October\Rain\Database\Updates\Seeder
{
    public function run()
    {
        \Buuug7\News\Models\Post::create([
            'title' => 'First News Post',
            'slug' => 'first-news-post',
            'summary' => 'first news post',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, itaque, cumque, maxime obcaecati reprehenderit ea dignissimos amet voluptatem id excepturi facilis 
            totam veritatis maiores eveniet neque explicabo temporibus quisquam in ex ab fugiat ipsa tempore sunt corporis nostrum quam illum!',
            'published' => true,
            'published_at' => \Carbon\Carbon::now(),
            'featured' => true,
        ]);

        \Buuug7\News\Models\Post::create([
            'title' => 'Second News Post',
            'slug' => 'second-news-post',
            'summary' => 'second news post',
            'content' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, itaque, cumque, maxime obcaecati reprehenderit ea dignissimos amet voluptatem id excepturi facilis 
            totam veritatis maiores eveniet neque explicabo temporibus quisquam in ex ab fugiat ipsa tempore sunt corporis nostrum quam illum!',
            'published' => true,
            'published_at' => \Carbon\Carbon::now(),
            'featured' => true,
        ]);
    }
}
