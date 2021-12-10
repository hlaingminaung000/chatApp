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
						auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
					}}
				>
					<GoogleOutlined /> Sign In with Google
				</div>

				<br />
				<br />

				<div
					className="login-button facebook"
					onClick={() =>
						auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
					}
				>
					<i className="bi bi-facebook facebook-icon"></i>Sign In with Facebook
				</div>
			</div>
		</div>
	);
}
