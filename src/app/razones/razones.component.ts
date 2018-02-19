import { Component, AfterViewInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Razon } from './razon';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';
import { RazonService } from './razon.service';

@Component({
  selector: 'app-razones',
  templateUrl: './razones.component.html',
  styles: []
})
export class RazonesComponent implements AfterViewInit {
  razonCollection: AngularFirestoreCollection<Razon>;
  columnsToDisplay = ['nombre', 'detalle', 'edit'];
  dataSource: MatTableDataSource<any>;
  razonAdicional: string = '';
  detalleAdicional: string = '';
  razonSeleccionada: Razon = {};

  constructor(public afs: AngularFirestore,
    public razonesService: RazonService) {    }
    
    ngAfterViewInit() {
      this.razonCollection = this.razonesService.getRazonesCollecion();
    this.razonesService.getRazones()
    .subscribe(data => {
       this.dataSource = new MatTableDataSource(data);
     });
  }

  editar(linea) {
    this.razonSeleccionada = linea;
  }
}
