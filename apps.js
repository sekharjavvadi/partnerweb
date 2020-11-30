var firebaseConfig = {
    apiKey: "AIzaSyDUAqHmXwTZU1caOWJ-LC-dBl3R7uzOkPo",
    authDomain: "spotmiess.firebaseapp.com",
    databaseURL: "https://spotmiess.firebaseio.com",
    projectId: "spotmiess",
    storageBucket: "spotmiess.appspot.com",
    messagingSenderId: "277034750528",
    appId: "1:277034750528:web:733cbb8bc07036c55b45a5",
    measurementId: "G-RZHFLJ8NR0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

        
            const db=firebase.firestore();
            db.settings({ timestampsInSnapshots: true });