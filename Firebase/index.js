import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDzMN0owH99YGderba8vMO8LTXiubzelyo",
  authDomain: "mybudget-92b87.firebaseapp.com",
  databaseURL: "https://mybudget-92b87.firebaseio.com",
  projectId: "mybudget-92b87",
  storageBucket: "mybudget-92b87.appspot.com",
  messagingSenderId: "1085285762716",
  appId: "1:1085285762716:web:977af43306ace4bb774f59",
  measurementId: "G-C1SS60K4CT",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  async signUp(email, password) {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  }
}

export default new Firebase();
