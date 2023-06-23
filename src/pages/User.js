import React, { useEffect, useState } from "react";
//import { useParams, withRouter } from "react-router";
import { useParams } from 'react-router-dom';
import axios from "axios";

const User = (props) => {
	const params = useParams();
	const [users, setUsers] = useState({});
	console.log('value issss' + params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://diggdevelopment.com/admin-panel/api/blogbyid/${params.slug}`
			);
			console.log("data issssssssss ", res.data);
			setUsers(res.data);
		}
		fetchData();
	}, []);
	return (
		<>
			<h1>Post Id : {users.title ? users.title : "Loading . . . . "}</h1>	
		</>
	);
};

export default User;