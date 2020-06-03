<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\User;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'email'=>$faker->email,
        'password'=>bcrypt('password'),
        'firstname'=>$faker->firstName,
        'lastname'=>$faker->lastName,
        'address'=>$faker->address,
        'phone'=>$faker->phoneNumber,
        'birthday'=>$faker->date('d-m-Y','now'),
        'national'=>$faker->country,
    ];
});
