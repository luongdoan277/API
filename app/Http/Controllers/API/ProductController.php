<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Model\Product;
use App\Model\User;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
//        $product = Product::find($id);
//        $dataProduct = fractal()->item();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     * @return string
     */
    public function update(Request $request, $id)
    {
        $product = [
            'name'=>$request->json()->get('name'),
            'type'=>$request->json()->get('type'),
            'image'=>$request->json()->get('image'),
            'description'=>$request->json()->get('description'),
            'size'=>$request->json()->get('size'),
            'color'=>$request->json()->get('color'),
            'price'=>$request->json()->get('price'),
        ];
        if (Product::findOrFail($id)->update($product)){
            return "Update successfully";
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy($id)
    {
        Product::findOrFail($id)->delete();
        return redirect();
    }
}
