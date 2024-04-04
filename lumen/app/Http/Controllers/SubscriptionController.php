<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Partner;


class SubscriptionController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    
        public function subscribe(Request $request)
        {
            // Validate the request
            $this->validate($request, [
                'email' => 'required|email|unique:subscribers'
            ]);
    
            // Create a new subscriber
            $subscriber = new Subscriber();
            $subscriber->email = $request->input('email');
            $subscriber->save();
    
            return response()->json(['message' => 'Subscription successful! Thank you for subscribing.']);
        }
    }