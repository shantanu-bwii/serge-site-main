import React, { useEffect, useState } from "react";
//import { useParams, withRouter } from "react-router";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Blog = (props) => {
	const params = useParams();
	const [users, setUsers] = useState({});
	console.log('value issss' + params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://insiderwebsolutions.com/admin-panel/api/blogbyid/${params.slug}`
			);
			console.log("data issssssssss ", res.data);
			setUsers(res.data);
		}
		fetchData();
	}, []);
	const htmlString = users?.description_front
	return (
		<>
		
			<div className="blog-dv">
				<div class="blog-image">
					

					<img src={users.image ? users.image : "Loading . . . . "}  />
				</div>
				<div class="blog-heading">
					<h1>{users.title ? users.title : "Loading . . . . "}</h1>

					  <div className="product-des" dangerouslySetInnerHTML={{ __html: htmlString }} />

         
      					
					{/* <p >{users.description_front ? users.description_front : "Loading . . . . "}</p> */}
				
				</div>

			</div>
		
		</>
	);
};

export default Blog;