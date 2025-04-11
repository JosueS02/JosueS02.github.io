import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Interest } from '../../models/interest/interest.model';

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

accesoInterests = "Interest running...";

private dbPath = '/interest';

interestRef: AngularFirestoreCollection<Interest>;

  constructor(private db: AngularFirestore) {
this.interestRef = db.collection(this.dbPath);
 }

getInterest(): AngularFirestoreCollection<Interest>{
return this.interestRef;
}
}
