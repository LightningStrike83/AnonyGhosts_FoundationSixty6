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
        $career = Career::select('id', 'reference', 'title', 'description')->orderBy('reference', 'asc')->get();
        return response()->json($career);
    }

    public function getOne($id) {

        $career = Career::find($id);
        return response()->json($career);
    }

    public function save(Request $request) {
        $this->validate($request, [
            'id' => 'required',
            'reference' => 'required',
            'title' => 'required',
            'description' => 'required'
        ]);
        $career = Career::create($request->all());
        return response()->json($career, 201);
    }

    public function update(Request $request, $reference) {
        $career = Career::findOrFail($reference);
    
        $this->validate($request, [
            'id' => 'required',
            'reference' => 'required',
            'title' => 'required',
            'description' => 'required'
        ]);
        $career->update($request->all());
        return response()->json($career);
    }

    public function delete($reference) {
        $career = Career::findOrFail($reference);
        $career->delete();
        return response()->json(null, 204);
    }


}

