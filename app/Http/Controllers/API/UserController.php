<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
        //$this->authorize('isAdmin');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$this->authorize('isAdmin');
        if (\Gate::allows('isAdmin') || \Gate::allows('isAuhtor')) {
            // The current user can edit settings
            return User::latest()->paginate(10);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'name'  => 'required|string|max:191',
            'username' => 'required|string|max:191|unique:users',
            'password'=>'required|string|min:8'
        ]);
        return User::create([
            'name'      =>   $request['name'],
            'username'     =>   $request['username'],
            'type'      =>   $request['type'],
            'bio'      =>   $request['bio'],
            'photo'      =>   $request['photo'],
            'password'  =>  Hash::make($request['password']),
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
        /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        //return Auth::user();
        return auth('api')->user();

    }
            /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateProfile(Request $request)
    {
        //return Auth::user();

        //take user
        $user = auth('api')->user();


        $this->validate($request,[
            'name'  => 'required|string|max:191',
            'username' => 'required|string|max:191|unique:users,username,'.$user->id,
            'password'=>'sometimes|required|string|min:8'
        ]);

        //take current photo
        $currentPhoto = $user->photo;


        if($request->photo != $currentPhoto){

            $name = time().'.' . explode('/', explode(':', substr($request->photo, 0, strpos($request->photo, ';')))[1])[1];

            \Image::make($request->photo)->save(public_path('img/profile/').$name);
            $request->merge(['photo'=>$name]);


            //delete current photo
            $userPhoto = public_path('img/profile/').$currentPhoto;
            if(file_exists($userPhoto)){
                @unlink($userPhoto);
            }
        }

        //check passwrd kalo change encryp
        if(!empty($request->password)){
            $request->merge(['password'=>Hash::make($request ['password'])]);

        }

        $user->update($request->all());
        return ['message'=>"success"];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->authorize('isAdmin');
        $user =User::findOrFail($id);

        $this->validate($request,[
            'name'  => 'required|string|max:191',
            'username' => 'required|string|max:191|unique:users,username,'.$user->id,
            'password'=>'sometimes|string|min:8'
        ]);

        $user->update($request->all());
        return ['message','Update  the user info'];
        //$id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // $this->authorize('isAdmin');
        $user = User::findOrFail($id);
        //delete the user
        $user->delete();
        return ['message'=>'User Deleted'];
    }


    public function search()
    {
        if($search = \Request::get('q')){
            $users = User::where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")
                        ->orWhere('name','LIKE',"%$search%");
            })->paginate(20);
        }else{
            //kalau ga ada query di search jalanin ini
            $users = User::latest()->paginate();
        }
        return $users;
    }
}

