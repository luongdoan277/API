<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    $title=$faker->sentence(4);
    return [
        'name'=>$faker->name,
        'type'=>$faker->mimeType,
        'image'=>$faker->imageUrl(),
        'description'=>$faker->text,
        'size'=>$faker->text,
        'color'=>$faker->colorName,
        'price'=>$faker->randomFloat(2)
    ];
});
