import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

export default function Login() {
	return (
		<div className="login-page">
			<h2 className="login-word">Login</h2>
			<div className="login-card">
				<div
					className="login-button google"
					onClick={() => {
						auth
							.signInWithPopup(new firebase.auth.GoogleAuthProvider())
							.then((d) => console.log("d", d));
					}}
				>
					<GoogleOutlined /> Sign In with Google
				</div>
			</div>
		</div>
	);
}
