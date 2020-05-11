import { Component } from '@angular/core';
import * as firebase from "firebase";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyA6uUygxbmvVlbs5XYnFETTbByGZWG1yaE",
      authDomain: "kaicloud34813.firebaseapp.com",
      databaseURL: "https://kaicloud34813.firebaseio.com",
      projectId: "kaicloud34813",
      storageBucket: "kaicloud34813.appspot.com",
      messagingSenderId: "547671635480",
      appId: "1:547671635480:web:3a6c4e59f5f40d5f2df56d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
