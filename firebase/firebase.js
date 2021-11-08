import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBRnNF4z4burdQlNpBhbrSZF0fqceNDKjQ',
  authDomain: 'hm-sprint-tony.firebaseapp.com',
  databaseURL: 'https://hm-sprint-tony.firebaseio.com',
  projectId: 'hm-sprint-tony',
  storageBucket: 'hm-sprint-tony.appspot.com',
  messagingSenderId: '802846160049',
  appId: '1:802846160049:web:860eeec063a4181d585e90',
  measurementId: 'G-ZL9SFR6ZM9'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
