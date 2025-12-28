<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Http;


use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return response()->json(Article::latest()->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'type' => 'in:original,updated'
        ]);

        $article = Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'type' => $request->type ?? 'original'
        ]);

        return response()->json($article, 201);
    }



public function scrapeBeyondChats()
{
    $url = 'https://beyondchats.com/blogs/';

    $response = Http::get($url);

    if (!$response->successful()) {
        return response()->json(['error' => 'Failed to fetch blogs'], 500);
    }

    $html = $response->body();

    preg_match_all('/<h2 class="entry-title".*?<a.*?>(.*?)<\/a>.*?<\/h2>/s', $html, $matches);

    $titles = array_slice($matches[1], -5); // last 5 (oldest)

    foreach ($titles as $title) {
        Article::create([
            'title' => strip_tags($title),
            'content' => 'Scraped content placeholder',
            'type' => 'original'
        ]);
    }

    return response()->json([
        'message' => '5 oldest articles scraped successfully'
    ]);
}



}


