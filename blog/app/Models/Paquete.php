<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paquete extends Model
{
    use HasFactory;
    protected $fillable = ['descripcion','origen','destino','peso','fecha','id_cliente'];
    
    public function cliente(){
        return $this->belongsTo(Cliente::class,'id','id_cliente');
    }
}
