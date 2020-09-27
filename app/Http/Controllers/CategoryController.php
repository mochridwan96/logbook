<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $tasks = Category::orderBy('created_at', 'DESC');
        
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
        $data = Category::select('id','name');
        
        $category = $data->orderBy('id', 'ASC')->get();
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $category,
        ], 200);
    }

    public function getCategory($id)
    {
        $task = Category::where('id', $id)->firstOrFail();
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }

    public function create(Request $request)
    {
        $task = Category::create($request->all());
        
        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $task = Category::find($id);
        $task->name         = $request->name;
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
        $task = Category::destroy($id);

        return response()->json([
            'status'  => 'success',
            'code'    => 200,
            'message' => '',
            'result'  => $task,
        ], 200);
    }
}
