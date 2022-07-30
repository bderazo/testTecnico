<?php

use App\Http\Controllers\Api\PaqueteController;
use App\Http\Controllers\Api\ClienteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(PaqueteController::class)->group(function () {
    //1ero para toda la colección (todos los datos); api/paquetes
    Route::get('/paquetes', 'index');
    //2do para el recurso (un registro en específico, vía su ID); api/paquete/1
    Route::get('/paquete/{id}', 'show');
    Route::post('/paquete', 'store');
    Route::put('/paquete/{id}', 'update');
    Route::delete('/paquete/{id}', 'destroy');
});

Route::controller(ClienteController::class)->group(function () {
    //1ero para toda la colección (todos los datos); api/clientes
    Route::get('/clientes', 'index');
    //2do para el recurso (un registro en específico, vía su ID); api/cliente/1
    Route::get('/cliente/{id}', 'show');
    //3ro mostrar el listado de paquetes que tiene un cliente; api/cliente/paquete/1
    Route::get('/cliente/paquete/{id}', 'userPaquete');
    Route::post('/cliente', 'store');
    Route::put('/cliente/{id}', 'update');
    Route::delete('/cliente/{id}', 'destroy');
});
