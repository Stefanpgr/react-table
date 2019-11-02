import firebase from "firebase/app";
import "firebase/database";
import config from "./config.js";

export default firebase.initializeApp(config);
