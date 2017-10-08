<?php namespace Buuug7\News\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreatePostsTable extends Migration
{
    public function up()
    {
        Schema::create('buuug7_news_posts', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('backend_user_id')->unsigned()->nullable();
            $table->string('title');
            $table->string('slug');
            $table->text('summary')->nullable();
            $table->longText('content')->nullable();
            $table->text('featured_image')->nullable();
            $table->text('files')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->boolean('published')->default(false);
            $table->boolean('featured')->default(false);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('buuug7_news_posts');
    }
}
