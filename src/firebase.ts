import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
	.initializeApp({
		apiKey: "AIzaSyCmNLK_Yp2yR8gqInGoJRSx7riGjkRY4_w",
		authDomain: "chat-app-2c324.firebaseapp.com",
		projectId: "chat-app-2c324",
		storageBucket: "chat-app-2c324.appspot.com",
		messagingSenderId: "774913940465",
		appId: "1:774913940465:web:a58229b54224fc00eb4250",
	})
	.auth();
