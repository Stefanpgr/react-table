import firebase from "firebase/app";
import "firebase/database";
// import config from "./config.json";

export default firebase.initializeApp({
  databaseURL: "https://myfunctions-330ec.firebaseio.com"
});
