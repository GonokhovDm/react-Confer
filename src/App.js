import React from "react";
import { Routes, Route } from 'react-router-dom';

import Layout from "./components/Layout";
import HomePage from "./Pages/HomePage";
import Speakers from "./Pages/Speakers";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Page404 from "./Pages/404";

function App() {
	return (
		<>
			<Routes>
				<Route path="/react-confer/" element={<Layout />}>
					<Route path="/react-confer/" element={<HomePage />} />
					<Route path="/react-confer/speakers" element={<Speakers />} />
					<Route path="/react-confer/blog" element={<Blog />} />
					<Route path="/react-confer/contact" element={<Contact />} />
					
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</>
	);
}

export default App;
