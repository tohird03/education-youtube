import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBwGZFTjAaw9c-rMChDzPgWS0nxkpGU3rI",
    authDomain: "fir-830e1.firebaseapp.com",
    projectId: "fir-830e1",
    storageBucket: "fir-830e1.appspot.com",
    messagingSenderId: "420543795495",
    appId: "1:420543795495:web:53cfa32e3aa13905a89902",
    measurementId: "G-PM6HK90LEL"
};

const server = firebase.initializeApp(firebaseConfig)
const auth = server.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }