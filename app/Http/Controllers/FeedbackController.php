<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Feedback;
use App\Http\Resources\FeedbackResource;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new FeedbackResource(Feedback::orderBy('id','DESC')->paginate(10));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Feedback $feedback)
    {
        $feedback->fullname = $request->fullname;
        $feedback->email = $request->email;
        $feedback->subject = $request->subject;
        $feedback->message =  $request->message;   
        $feedback->save();
        return new FeedbackResource($feedback);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Feedback $feedback)
    {
        return new FeedbackResource($feedback);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feedback $feedback)
    {
        $feedback->fullname = $request->fullname;
        $feedback->email = $request->email;
        $feedback->subject = $request->subject;
        $feedback->message =  $request->message;   
        $feedback->status = $request->status;
        $feedback->save();
        return new FeedbackResource($feedback);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();
    }
}
