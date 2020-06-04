<?php


namespace App\Http\Services;


use App\Http\Controllers\Controller;
use App\Model\Product;
use App\Model\User;
use Dotenv\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductService extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $product = Product::all()->random(1)->toJson();
        return response($product);
    }

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
        $validate= \Illuminate\Support\Facades\Validator::make($request->json()->all(),[
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'image' => 'required|string|max:255',
            'description' => 'required',
            'size' => 'required|string|max:255',
            'color' => 'required|string|max:255',
            'price' => 'required|string|max:255',
        ]);
        if ($validate->fails()){
            return response()->json($validate->errors()->toJson(), 400);
        }
        $product= Product::create([
            'name' => $request->json()->get('name'),
            'type' => $request->json()->get('type'),
            'image' => $request->json()->get('image'),
            'description' => $request->json()->get('description'),
            'size' => $request->json()->get('size'),
            'color' => $request->json()->get('color'),
            'price' => $request->json()->get('price'),
        ]);
        $product->save();
        return response()->json([
            'message' => 'Product created successfully',
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
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
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }
}
