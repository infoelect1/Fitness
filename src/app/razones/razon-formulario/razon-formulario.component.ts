import { Component, OnInit, Input } from '@angular/core';
import { Razon } from '../razon';
import { RazonService } from '../razon.service';

@Component({
  selector: 'app-razon-formulario',
  templateUrl: './razon-formulario.component.html',
  styles: []
})
export class RazonFormularioComponent implements OnInit {
  @Input() razonEditada: Razon;
  constructor(private razonService: RazonService) { }

  ngOnInit() {
  }

  crearRazon(){
    this.razonEditada.id = '';
    this.razonEditada.detalle = '';
    this.razonEditada.nombre = '';
    this.razonEditada.orden = 0;
  }

  grabarRazon(){
    console.log(this.razonEditada);
    if (this.razonEditada.id !== undefined && this.razonEditada.id.length > 0)
      this.razonService.updateRazon(this.razonEditada);
    else
      this.razonService.addRazon(this.razonEditada);    
  }

  borrarRazon(){
    const response = confirm('¿Está seguro que quiere borrar el registro?');
    if (response ) {
      this.razonService.deleteRazon(this.razonEditada);
      this.crearRazon();
    }
  }
}
