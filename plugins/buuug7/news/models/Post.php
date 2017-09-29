<?php namespace Buuug7\News\Models;

use Carbon\Carbon;
use Model;
use October\Rain\Database\Traits\Validation;

/**
 * Post Model
 */
class Post extends Model
{
    use Validation;
    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_news_posts';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    protected $jsonable = [
        'files',
    ];

    public $rules = [
        'title' => 'required',
        'slug' => ['required', 'unique:buuug7_news_posts'],
        'content' => 'required',
        'summary' => 'required',
    ];

    public $customMessage = [

    ];

    public $attributeNames = [

    ];

    protected $dates = [
        'published_at',
    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [
        'backendUser' => [
            'Backend\Models\User',
            'key' => 'backend_user_id',
        ],
    ];
    public $belongsToMany = [
        'categories' => [
            'Buuug7\News\Models\Category',
            'table' => 'buuug7_news_posts_categories',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function scopeIsPublished($query)
    {
        return $query
            ->whereNotNull('published')
            ->where('published', true)
            ->whereNotNull('published_at')
            ->where('published_at', '<', Carbon::now());
    }

    public function nextPost()
    {
        return self::isPublished()
            ->where('id', '>', $this->id)
            ->orderBy('id', 'asc')
            ->first();
    }

    public function previousPost()
    {
        return self::isPublished()
            ->where('id', '<', $this->id)
            ->orderBy('id', 'desc')
            ->first();
    }
}
