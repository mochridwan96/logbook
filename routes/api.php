<?php

use Illuminate\Http\Request;

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


Route::apiResources(['user'=>'API\UserController']);

Route::get('profile','API\UserController@profile');
Route::get('findUser','API\UserController@search');
Route::put ('profile','API\UserController@updateProfile');

Route::group([ 'prefix' => 'v1'], function () {
    Route::group(['middleware' => 'auth:api'], function () {

        Route::group(['prefix' => 'task'], function () {
            Route::get('/', 'TaskController@index');
            Route::get('/task-name', 'TaskController@getName');
            Route::get('/{id}', 'TaskController@getTask');
            Route::post('/', 'TaskController@create');
            Route::put('/{id}', 'TaskController@update');
            Route::delete('/{id}', 'TaskController@delete');
        });

        Route::group(['prefix' => 'category'], function () {
            Route::get('/', 'CategoryController@index');
            Route::get('/category-name', 'CategoryController@getName');
            Route::get('/{id}', 'CategoryController@getCategory');
            Route::post('/', 'CategoryController@create');
            Route::put('/{id}', 'CategoryController@update');
            Route::delete('/{id}', 'CategoryController@delete');
        });

        Route::group(['prefix' => 'dashboard'], function () {
            Route::get('/', 'DashboardController@dashboard');
        });

        

    });
});
