<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = ["firstname", "lastname", "email", "phone", "notes", "role"];
    protected $fillable = ["name", "image_url", "page_url", "id"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
