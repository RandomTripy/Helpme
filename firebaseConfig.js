//import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/auth";
import "firebase/compat/database";
//import "firebase/firestore";
//import "firebase/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyCzLsWCrc_m-0D0JHBx-i3ZgilLOM4opeU",
    authDomain: "helpme-a57a1.firebaseapp.com",
    databaseURL: "https://helpme-a57a1-default-rtdb.firebaseio.com/",
    projectId: "helpme-a57a1",
    storageBucket: "helpme-a57a1.appspot.com",
    messagingSenderId: "485305974242",
    appId: "1:485305974242:web:585aaef1e31f5d6f360dbb",
    measurementId: "G-S9GGCL5ZG0"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()





