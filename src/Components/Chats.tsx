import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

import { auth } from "../firebase";
import { UserContext } from "../contexts/UserContext";

export default function Chats() {
	const [loading, setLoading] = useState(true);
	const user: any = useContext(UserContext);
	const navigate = useNavigate();
	async function handleLogout() {
		setLoading(true);
		await auth.signOut();
		navigate("/");
	}
	// async function getFile(url) {
	// 	let response = await fetch(url);
	// 	console.log("response", response);
	// 	let data = await response.blob();
	// 	console.log("data", data);
	// 	console.log("c");
	// 	const nothing = new File([data], "test.jpg", { type: "image/jpeg" });
	// 	console.log("nothing", nothing);
	// 	return nothing;
	// }

	useEffect(() => {
		if (!user || user === null) {
			navigate("/");
			return;
		}

		axios
			.get("https://api.chatengine.io/users/me/", {
				headers: {
					"project-id": process.env.REACT_APP_CHAT_ENGINE_ID as string,
					"user-name": user.email,
					"user-secret": user.uid,
				},
			})

			.then((a) => {
				setLoading(false);
			})

			.catch((e) => {
				let formdata = new FormData();
				formdata.append("email", user.email);
				formdata.append("username", user.email);
				formdata.append("secret", user.uid);

				// getFile(user.photoURL).then((avatar) => {
				// 	formdata.append("avatar", avatar, avatar.name);
				// 	console.log("avatar", avatar);
				// 	console.log("formdata", formdata);
				axios
					.post("https://api.chatengine.io/users/", formdata, {
						headers: {
							"private-key": process.env.REACT_APP_CHAT_ENGINE_KEY as string,
						},
					})
					.then(() => {
						setLoading(false);
					})
					.catch((e) => console.log("e", e.response));
			});
		// });
	}, [user]);
	return (
		<div className="chats-page">
			{!loading && (
				<div className="nav-bar">
					<div className="logo-tab">Hlaing Min Aung</div>

					<div onClick={handleLogout} className="logout-tab">
						Logout
					</div>
				</div>
			)}

			{!loading && (
				<ChatEngine
					height="calc(100vh - 66px)"
					projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
					userName={user.email}
					userSecret={user.uid}
				/>
			)}
		</div>
	);
}
