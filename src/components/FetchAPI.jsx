import { useEffect, useState } from "react";

const useTitle = () => {
	const [items, setItems] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					"https://fakestoreapi.com/products/category/electronics",
					{
						mode: "cors",
					}
				);
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				let data = await response.json();
				setItems(data);
				setError(null);
			} catch (err) {
				setError(err.message);
				setItems(null);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return { items, error, loading };
};

export default useTitle;
