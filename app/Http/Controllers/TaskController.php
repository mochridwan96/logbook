<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::paginate(10);
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'data'  => $tasks,
        ], 200);
    }


    public function getName()
    {

    }

    public function getTask()
    {

    }

    public function create(Request $request)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function delete($id)
    {

    }
}
