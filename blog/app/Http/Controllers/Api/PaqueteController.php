<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Paquete;
use Illuminate\Http\Request;

class PaqueteController extends Controller
{
    //1ero para toda la colección (todos los datos); api/paquetes
    public function index()
    {
        $paquete = Paquete::all();
        return $paquete;
    }

    public function store(Request $request)
    {
        $paquete = new Paquete();
        $paquete->origen = $request->origen;
        $paquete->destino = $request->destino;
        $paquete->peso = $request->peso;
        $paquete->fecha = $request->fecha;
        $paquete->cliente = $request->cliente;
        $paquete->save();
    }

    //2do para el recurso (un registro en específico, vía su ID); api/paquete/1
    public function show($id)
    {
        $paquete = Paquete::find($id);
        return $paquete;
    }

    public function update(Request $request, $id)
    {
        $paquete = Paquete::findOrFail($request->id);
        $paquete->origen = $request->origen;
        $paquete->destino = $request->destino;
        $paquete->peso = $request->peso;
        $paquete->fecha = $request->fecha;
        $paquete->cliente = $request->cliente;
        $paquete->save();
        return $paquete;
    }

    public function destroy($id)
    {
        $paquete = Paquete::destroy($id);
        return $paquete;
    }

}
