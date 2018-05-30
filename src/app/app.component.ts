import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  private itemsCollection: AngularFirestoreCollection<Item>;
  
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('heroes');
    this.item1 = this.itemsCollection.valueChanges();
  }
  addItem(item2) {
    this.itemsCollection.add(item2);
  }
  
  
}