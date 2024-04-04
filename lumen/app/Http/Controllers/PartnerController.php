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
        $partner = Partner::select('id', 'name', 'image_url', 'page_url')->orderBy('id', 'asc')->get();
        return response()->json($partner);
    }

    public function getOne($id) {
        $partner = Partner::select('id', 'name', 'image_url', 'page_url')->where('id', $id)->first();
        return response()->json($partner);
    }

    public function save(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'image_url' => 'required',
            'page_url' => 'required'
        ]);
        $partner = Partner::create($request->all());
        return response()->json($partner, 201);
    }

    public function update(Request $request, $id) {
        $partner = Partner::findOrFail($id);
    
        $this->validate($request, [
            'id' => 'required',
            'name' => 'required',
            'image_url' => 'required',
            'page_url' => 'required'
        ]);
        $partner->update($request->all());
        return response()->json($partner);
    }

    public function delete($id) {
        $partner = Partner::findOrFail($id);
        $partner->delete();
        return response()->json(null, 204);
    }

    
    
 

}

