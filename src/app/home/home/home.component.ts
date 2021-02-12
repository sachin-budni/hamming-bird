import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list: Observable<any> = of([]);
  items: Observable<any> = of([]);
  img: string = 'https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634.jpg';
  constructor(private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private store: AngularFirestore,
    private photo: AngularFireStorage) { }

  ngOnInit(): void {
    this.list = this.db.list('list').valueChanges();
    this.items = this.store.collection('items').valueChanges();
    // this.items.subscribe(console.log);

    this.photo.ref('/sample/girl.png').getDownloadURL()
    .subscribe(i =>{
      console.log(i)
      this.img = i
    });
  }

  signUp() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(d => {
      console.log(d)
    });
  }

  get user(): Observable<firebase.User | null> {
    return this.auth.user;
  }

  get currentUser(): Promise<firebase.User | null> {
    return this.auth.currentUser;
  }

}
