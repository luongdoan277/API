<?php

namespace App\Model;

use Jenssegers\Mongodb\Eloquent\Model;

class Oder extends Model
{
    protected $collection = 'order';
    protected $connection = 'mongodb';

    protected $fillable = [
        'user_id',
        'cart',
        'address',
        'name',
        'payment_id'
    ];

    public function user(){
        return $this->belongsTo('App\Model\User');
    }
}
