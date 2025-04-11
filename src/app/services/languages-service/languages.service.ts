import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Languages } from '../../models/languages/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

accesoLanguages = "Languages running...";

private dbPath = '/languages';

languageRef: AngularFirestoreCollection<Languages>;

  constructor(private db: AngularFirestore) {
this.languageRef = db.collection(this.dbPath);
 }

getLanguages(): AngularFirestoreCollection<Languages>{
return this.languageRef;
}
}
