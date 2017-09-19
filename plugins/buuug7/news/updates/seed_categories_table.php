<?php

use October\Rain\Database\Updates\Seeder;
use Buuug7\News\Models\Category;

class SeedCategoriesTable extends Seeder
{
    public function run()
    {
        Category::create([
            'name' => 'Root',
            'slug' => 'Root',
            'description' => 'default root',
        ]);
    }
}