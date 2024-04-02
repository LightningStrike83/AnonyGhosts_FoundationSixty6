<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

//Blog Posts
$router->get("/blog_posts", "BlogPostController@getAll");
$router->get("/blog_posts/{id}", "BlogPostController@getOne");
// $router->get("/blog_postsandblog_posts_authors", "BlogPostController@getAllBlogPostAuthor");
// $router->get("/blog_postsandblog_posts_authors/{id}", "BlogPostController@getOneBlogPostAuthor");
$router->post("/blog_posts/add", "BlogPostController@save");
$router->post('/blog_posts/edit/{id}', 'BlogPostController@update');
$router->delete('/blog_posts/delete/{id}', 'BlogPostController@delete');

//Authors
// $router->get("/blog_posts_authors", "AuthorController@getAll");
// $router->get("/blog_posts_authors/{id}", "AuthorController@getOne");
// $router->post("/blog_posts_authors/add", "AuthorController@save");
// $router->post('/blog_posts_authors/edit/{id}', 'AuthorController@update');
// $router->delete('/blog_posts_authors/delete/{id}', 'AuthorController@delete');


// //Contacts
// $router->get("/contacts", "ContactController@getAll");
// $router->get("/contacts/{id}", "ContactController@getOne");
// $router->post("/contacts/add", "ContactController@save");
// $router->post('/contacts/edit/{id}', 'ContactController@update');
// $router->delete('/contacts/delete/{id}', 'ContactController@delete');


//Events
$router->get("/events", "EventController@getAll");
// $router->get("/events/{id}", "EventController@getOne");
$router->post("/events/add", "EventController@save");
$router->post('/events/edit/{id}', 'EventController@update');
$router->delete('/events/delete/{id}', 'EventController@delete');


//Volunteers
$router->get("/volunteers", "VolunteerController@getAll");
// $router->get("/volunteers/{id}", "VolunteerController@getOne");
$router->post("/volunteers/add", "VolunteerController@save");
$router->post('/volunteers/edit/{id}', 'VolunteerController@update');
$router->delete('/volunteers/delete/{id}', 'VolunteerController@delete');


//Careers
$router->get("/careers", "CareerController@getAll");

//Partners
$router->get("/partners", "PartnerController@getAll");


