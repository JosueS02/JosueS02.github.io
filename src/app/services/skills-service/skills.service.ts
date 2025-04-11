import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Skills } from '../../models/skills/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

accesoSkill = "skills running...";

private dbPath = '/skills';

skillsRef: AngularFirestoreCollection<Skills>;

  constructor(private db: AngularFirestore) {
this.skillsRef = db.collection(this.dbPath);
 }

getSkills(): AngularFirestoreCollection<Skills>{
return this.skillsRef;
}
}
