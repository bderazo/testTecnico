<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    //1ero para toda la colección (todos los datos); api/clientes.
    public function index()
    {
        $cliente = Cliente::all();
        return $cliente;
    }

    //2do para el recurso (un registro en específico, vía su ID); api/cliente/1
    public function show($id)
    {
        $cliente = Cliente::find($id);
        return $cliente;
    }

    //3ro mostrar el listado de paquetes que tiene un cliente; api/cliente/paquete/1
    public function userPaquete($id)
    {
        $cliente = Cliente::find($id);
        $paquete=$cliente->paquete;
        return response ($paquete,200);
    }

    public function store(Request $request)
    {
        $cliente = new Cliente();
        $cliente->origen = $request->origen;
        $cliente->destino = $request->destino;
        $cliente->peso = $request->peso;
        $cliente->fecha = $request->fecha;
        $cliente->cliente = $request->cliente;
        $cliente->save();
    }
    
    public function update(Request $request, $id)
    {
        $cliente = Cliente::findOrFail($request->id);
        $cliente->origen = $request->origen;
        $cliente->destino = $request->destino;
        $cliente->peso = $request->peso;
        $cliente->fecha = $request->fecha;
        $cliente->cliente = $request->cliente;
        $cliente->save();
        return $cliente;
    }
    
    public function destroy($id)
    {
        $cliente = Cliente::destroy($id);
        return $cliente;
    }
}
