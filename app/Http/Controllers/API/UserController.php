<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Model\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    public function getLogin(){
        return view('js/components/pages/Login.js');
    }
    public function getProfile(User $id)
    {
        $profile = User::findOrFail($id);
        return response($profile);
    }
    public function getLogout()
    {
        Auth::logout();
        return redirect()->route('/login');
    }
}
