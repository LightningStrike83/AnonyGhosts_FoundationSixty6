<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Career;


class CareerController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    public function getAll() {
        $career = Career::select('reference', 'title', 'description')->orderBy('id', 'asc')->get();
        return response()->json($career);
    }
 

}

