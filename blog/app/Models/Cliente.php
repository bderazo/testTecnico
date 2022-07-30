<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','direccion','correo','telefono','cuentaBancaria'];
    
    public function paquete(){
        return $this->hasMany(Paquete::class, 'id_cliente', 'id');
    }
}
