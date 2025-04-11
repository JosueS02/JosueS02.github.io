import { Component } from '@angular/core';
import { InterestsService } from '../services/interest-service/interests.service';
import { Interest } from '../models/interest/interest.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {

interest: Interest[] =[];

constructor(public interestsService: InterestsService)
{
console.log(this.interestsService);
this.interestsService.getInterest().snapshotChanges().pipe(
map(changes => 
changes.map(c =>
({ id: c.payload.doc.id, ...c.payload.doc.data() })
)
)
).subscribe(data => {
this.interest = data;
console.log (this.interest);
});
}

}
