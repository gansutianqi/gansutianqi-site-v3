<?php namespace Buuug7\News\Models;

use October\Rain\Database\Model;
use October\Rain\Database\Traits\NestedTree;
use October\Rain\Database\Traits\Validation;

/**
 * Category Model
 */
class Category extends Model
{
    use Validation;
    use NestedTree;
    /**
     * @var string The database table used by the model.
     */
    public $table = 'buuug7_news_categories';

    /**
     * @var array Guarded fields
     */
    protected $guarded = ['*'];

    /**
     * @var array Fillable fields
     */
    protected $fillable = [];

    public $rules = [
        'name' => 'required',
        'slug' => ['required', 'unique:buuug7_news_categories'],
    ];

    public $customMessage = [

    ];

    public $attributeNames = [

    ];

    /**
     * @var array Relations
     */
    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [
        'posts' => [
            'Buuug7\News\Models\Post',
            'table' => 'buuug7_news_posts_categories',
        ],
    ];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [];
    public $attachMany = [];

    public function getParentIdOptions()
    {
        $categories = array_pluck(self::get(), 'name', 'id');
        //unset($categories[$this->id]);
        return $categories;
    }

    public function beforeSave(){
        if($this->parent_id == ''){
            $this->parent_id = null;
        }
    }
}
