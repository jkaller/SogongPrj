import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('heroes');
    this.item1 = this.itemsCollection.valueChanges();
  }
  
  add(title: string, content: string) {
    title = title.trim();
    content = content.trim();
    
    this.AppComponent.addItem({ title, content })  
  }
  ngOnInit() {
  }

}
