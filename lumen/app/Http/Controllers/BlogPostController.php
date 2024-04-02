<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\BlogPost;


class BlogPostController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll(){
        $blogposts = BlogPost::all();
        return response()->json($blogposts);
    }

    public function getAllPostAuthors(){
        $blogposts = BlogPost::join("blog_post_authors", "blog_posts.author", "=", "blog_post_authors.id")-> select("blog_posts.id", "title", "text", "first_name", "last_name", "image_filename")->get();
         return response()->json($posts);
    }

    public function getOne($id){

        $blogpost = BlogPost::find($id);
        return response()->json($blogpost);
    }

    public function getOnePostAuthor($id) {
        $blogpost = BlogPost::join("blog_posts.author", "blog_posts.author", "=", "blog_posts.author.id")-> where("articles.id", "=", $id)->get();
        return response()->json($blogpost);
    }

    public function save(Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'text' => 'required',
            'author' => 'required',
            'image' => 'required'
        ]);
        $blogpost = BlogPost::create($request->all());
        return response()->json($blogpost, 201);
    }

    public function update(Request $request, $id) {
        $blogpost = BlogPost::findOrFail($id);
    
        $this->validate($request, [
            'title' => 'required',
            'text' => 'required',
            'author' => 'required',
            'image' => 'required'
        ]);
        $blogpost->update($request->all());
        return response()->json($blogpost);
    }

    public function delete($id) {
        $blogpost = BlogPost::findOrFail($id);
        $blogpost->delete();
        return response()->json(null, 204);
    }

 

}

