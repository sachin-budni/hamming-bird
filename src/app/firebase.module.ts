import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, SETTINGS } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  exports: [
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [{ provide: SETTINGS, useValue: {} }]
})
export class FirebaseModule { }
