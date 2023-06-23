import React, { useEffect, useState } from "react";
//import { useParams, withRouter } from "react-router";
import { useParams } from 'react-router-dom';
import axios from "axios";
import useLocales from '../hooks/useLocales';

const Blog = (props) => {
	const params = useParams();
	const { currentLang } = useLocales();
	const [users, setUsers] = useState({});
	const [currentLanguage, setCurrentLanguage] = useState(currentLang.value);
	console.log('value issss' + params);
	
	async function fetchData() {
		const res = await axios.get(
			`https://diggdevelopment.com/admin-panel/api/blogbyidfr/${params.slug}`
		).then(
			(res) => setUsers(res.data)
		)
		setCurrentLanguage(currentLang.value);
	}

	const fetchTitle = (language, userObj) => {
		if (language == 'en') {
		  return userObj.title;
		} else if (language == 'fr') {
		  return userObj.titlefr;
		} else {
		  return userObj.titlesp;
		}
	}
	
	const fetchContent = (language, userObj) => {
		if (language == 'en') {
		  return userObj.description_front;
		} else if (language == 'fr') {
		  return userObj.description_front_french;
		} else {
		  return userObj.description_front_spanish;
		}
	}

	useEffect(() => {
		fetchData();
	}, [currentLang]);
	const htmlString = fetchContent(currentLanguage, users)
	return (
		<>
		
			<div className="blog-dv">
				<div class="blog-image">
					

					{/* <img src={users.image ? users.image : "Loading . . . . "}  /> */}
					<img src={users.image}  />
				</div>
				<div class="blog-heading">
					{/* <h1>{users.title ? fetchTitle(currentLanguage, users) : "Loading . . . . "}</h1> */}
					<h1>{fetchTitle(currentLanguage, users)}</h1>

						<div className="product-des" dangerouslySetInnerHTML={{ __html: htmlString }} />

         
      					
					{/* <p >{users.description_front ? fetchContent(currentLanguage, users) : "Loading . . . . "}</p> */}
					{/* <p >{fetchContent(currentLanguage, users)}</p> */}
				
				</div>

			</div>
		
		</>
	);
};

export default Blog;