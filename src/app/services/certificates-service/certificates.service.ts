import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Certificates } from '../../models/certificates/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

accesoCertificates = "Certificates running...";

private dbPath = '/certificates';

certificatesRef: AngularFirestoreCollection<Certificates>;

  constructor(private db: AngularFirestore) {
this.certificatesRef = db.collection(this.dbPath);
 }

getCertificates(): AngularFirestoreCollection<Certificates> {
return this.certificatesRef;
}
}
