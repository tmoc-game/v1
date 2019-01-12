import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCexbH1QvYGmBPIgNSFZnYYhhJCTwLIHt8',
  authDomain: 'tiny-merchent-on-cloud.firebaseapp.com',
  databaseURL: 'https://tiny-merchent-on-cloud.firebaseio.com',
  projectId: 'tiny-merchent-on-cloud',
  storageBucket: 'tiny-merchent-on-cloud.appspot.com',
  messagingSenderId: '364081715465'
};

export function init() {
  return firebase.initializeApp(config);
}

export default firebase;
