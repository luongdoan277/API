<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('profile/{id}', 'API\UserController@index');
Route::post('login', 'API\LoginController@login');
Route::post('register', 'API\LoginController@register');
Route::get('view_product', 'API\ProductController@index');
Route::post('add_product', 'API\ProductController@store');


