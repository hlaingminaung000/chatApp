import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Chats from "./Components/Chats";
import Login from "./Components/Login";
import { UserContext } from "./contexts/UserContext";
import { auth } from "./firebase";

function App() {
	const [user, setUser] = useState<any>();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		auth.onAuthStateChanged((userInfo) => {
			setUser(userInfo);
			setLoading(false);
			console.log("second");
			console.log("userInfo", userInfo);
			if (userInfo) navigate("/chats");
		});
		console.log("first");
	}, []);
	return (
		<div style={{ fontFamily: "Avenir" }}>
			<UserContext.Provider value={user}>
				{!loading && (
					<Routes>
						<Route path="/chats" element={<Chats />} />
						<Route path="/" element={<Login />} />
					</Routes>
				)}
			</UserContext.Provider>
		</div>
	);
}

export default App;
