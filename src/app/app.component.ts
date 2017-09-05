import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature: string = 'recipe';
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCDyWH942IRROTFCykjcM5bHPIx4F9hVpQ",
      authDomain: "ng-recipe-book-fb639.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
