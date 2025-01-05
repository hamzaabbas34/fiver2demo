import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import ShowMoveComponet from "../ShowMoveComponet";

export default function Search() {
	// Extract query parameters from the URL
	const { search } = useLocation();

	// State to store search query and API results
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Parse the query parameter from the URL
	const queryParams = new URLSearchParams(search);
	const query = queryParams.get("query"); // Retrieve the value of "query"

	// Function to fetch data from the API
	const fetchResults = async () => {
		try {
			setLoading(true);
			const API_KEY =
				"SEEhospj4HWBFG1vCmkqTo6vWLp1RcQpLBeDHo7P8wKoRMtJTV0zBuL1";
			const response = await fetch(
				`https://api.pexels.com/videos/search?query=${query}&per_page=10`,
				{
					headers: {
						Authorization: API_KEY,
					},
				}
			);

			if (!response.ok) {
				throw new Error("Failed to fetch data");
			}

			const data = await response.json();
			setResults(data.videos || []); // Set results to the videos array
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// Fetch data when the component mounts or query changes
	useEffect(() => {
		if (query) {
			fetchResults();
		}
	}, [query]);

	return (
		<div className="bg-black text-white min-h-screen">
			<Navbar />
			{loading && <p>loading</p>}
			{error && <p>loading</p>}
			<div className="px-8">
				<h2 className=" pt-32 pb-16 font-montserrat text-2xl">{query}</h2>
				<ShowMoveComponet data={results} />
	
			</div>
		</div>
	);
}
