import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Razon } from './razon';
import { MatTableDataSource } from '@angular/material';

@Injectable()
export class RazonService {
  razonesCollection: AngularFirestoreCollection<Razon>;
  razonesObservable: Observable<Razon[]>;
  razonDoc: AngularFirestoreDocument<Razon>;
  public usuarioID: string = 'vacio';

  constructor(public afs: AngularFirestore) {  }

  getRazonesCollecion() {
    this.razonesCollection = this.afs.collection(`usuarios/${this.usuarioID}/razones`);

    this.razonesObservable = this.razonesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Razon;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.razonesCollection;
  }

  getRazones() {
    // console.log(this.razonesObservable)
    return this.razonesObservable;
  }

  addRazon(razon: Razon) {
    // console.log('Creando Id', this.usuarioID);
    this.afs.collection(`usuarios/${this.usuarioID}/razones`).add(razon);
  }

  deleteRazon(razon: Razon) {
    this.razonDoc = this.afs.doc(`usuarios/${this.usuarioID}/razones/${razon.id}`);
    this.razonDoc.delete();
  }

  updateRazon(razon: Razon) {
    // console.log(this.usuarioID);
    this.razonDoc = this.afs.doc(`usuarios/${this.usuarioID}/razones/${razon.id}`);
    this.razonDoc.update(razon);
  }
}
