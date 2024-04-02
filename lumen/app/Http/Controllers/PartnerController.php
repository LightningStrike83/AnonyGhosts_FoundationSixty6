<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Partner;


class PartnerController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */


    public function getAll() {
        $partner = Partner::select('name', 'image_url', 'page_url')->orderBy('id', 'asc')->get();
        return response()->json($partner);
    }
 

}

