<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table = 'tasks';
    protected $fillable = [
        'date',
        'description',
        'category_id',
        'no_po',
        'no_ist',
        'no_return',
        'intruction',
        'user_id',
        'status'
    ];

}
