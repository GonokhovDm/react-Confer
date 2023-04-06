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
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/speakers" element={<Speakers />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
					
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</>
	);
}

export default App;
