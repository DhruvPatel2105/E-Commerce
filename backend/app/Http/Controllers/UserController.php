<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class UserController extends Controller
{

    public function index()
    {
        return User::all();
    }


    public function store(Request $request)
    {
        $user = User::create(
            $request->only('first_name', 'last_name','email')
            + ['password' => Hash::make(1234)]
        );

        return response($user,Response::HTTP_CREATED);
    }

    public function show(string $id)
    {
        return User::find($id);
    }


    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        $user->update($request->only('first_name', 'last_name', 'email'));

        return response($user,Response::HTTP_ACCEPTED);
    }


    public function destroy(string $id)
    {
        User::destroy($id);

        return response(null,Response::HTTP_NO_CONTENT);
    }
}
