<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});


// use App\Http\Controllers\Api\ArticleController;

// Route::get('/api/articles', [ArticleController::class, 'index']);
// Route::post('/api/articles', [ArticleController::class, 'store']);
// Route::get('/api/scrape-beyondchats', [ArticleController::class, 'scrapeBeyondChats']);


use App\Http\Controllers\Api\ArticleController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

Route::withoutMiddleware([VerifyCsrfToken::class])->group(function () {
    Route::get('/api/articles', [ArticleController::class, 'index']);
    Route::post('/api/articles', [ArticleController::class, 'store']);
    Route::get('/api/scrape-beyondchats', [ArticleController::class, 'scrapeBeyondChats']);
});
