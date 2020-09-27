<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\TaskStoreRequest;
use App\Http\Requests\TaskUpdateRequest;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::join('categories', 'tasks.category_id', '=', 'categories.id')
                        ->select('tasks.*', 'categories.name as category_name')
                        ->orderBy('created_at', 'DESC');
        
        if (request()->q != '') {
            $tasks = $tasks->where('tasks.name', 'LIKE', '%' . request()->q . '%');
        }

        $tasks = $tasks->paginate(10);
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $tasks,
        ], 200);
    }


    public function getName()
    {
        $data = Task::select('id','name');
        
        return $data->orderBy('id', 'ASC')->get();
    }

    public function getTask($id)
    {
        $task = Task::where('id', $id)->firstOrFail();
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }

    public function create(TaskStoreRequest $request)
    {
        // $request->validate([
        //     'title' => 'required|max:255',
        //     'url' => 'required|url|max:255',
        //     'description' => 'required|max:255',
        // ]);
        
        $user_login = Auth::id(); 
        $task = Task::create([
            'date' => $request->date,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'no_po' => $request->no_po,
            'no_ist' => $request->no_ist,
            'no_return' => $request->no_return,
            'suplier_name' => $request->suplier_name,
            'store_name' => $request->store_name,
            'intruction' => $request->intruction,
            'user_id' => $user_login,
            'status' => $request->status  
        ]);
        
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }

    public function update(TaskUpdateRequest $request, $id)
    {

        $task = Task::find($id);
        $task->category_id  = $request->category_id;
        $task->date         = $request->date;
        $task->description  = $request->description;
        $task->no_po        = $request->no_po;
        $task->no_ist       = $request->no_ist;
        $task->no_return    = $request->no_return;
        $task->suplier_name    = $request->suplier_name;
        $task->store_name    = $request->store_name;
        $task->intruction   = $request->intruction;
        $task->user_id      = Auth::id();
        $task->status       = $request->status;
        $task->save();

        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }

    public function delete($id)
    {
        $task = Task::destroy($id);

        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }
}
