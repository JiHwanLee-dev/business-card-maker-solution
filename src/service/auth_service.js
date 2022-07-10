import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    console.log("login fuc");
    console.log(`.${providerName}.`);
    console.log(`${providerName}AuthProvider`);
    const authProvider = new firebase.auth[
      `${providerName.trim()}AuthProvider`
    ]();
    // const authProvider = new firebase.auth.GoogleAuthProvider();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  test() {
    return "test";
  }
}

export default AuthService;
