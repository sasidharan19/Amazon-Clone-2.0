var firebaseConfig = {
    apiKey: "AIzaSyCrFB628NhvQ-S3uXJ-0owhWgxscd-ekIU",
    authDomain: "clone-two-56a1f.firebaseapp.com",
    projectId: "clone-two-56a1f",
    storageBucket: "clone-two-56a1f.appspot.com",
    messagingSenderId: "365746846990",
    appId: "1:365746846990:web:c0a9ba526cc7d606712b5f",
    measurementId: "G-XQ6TD0Z9KB"
 };
 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();