<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $cards = collect();
        $status = ["TODO","DOING","REVIEW","DONE"];
        
        foreach($status as $item) {
            $total = \App\Task::where('status', $item)->groupBy('status')->count();
            $cards->push([$item => $total]);
        }

        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $cards,
        ], 200);
    }

    public function report()
    {

        $category = \App\Category::select('name')->pluck('name');
        

        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $category,
        ], 200);
    }
}
