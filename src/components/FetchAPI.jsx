import { useEffect, useState } from "react";

const useTitle = () => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/?categoryId=2"
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let items = await response.json();
        setItems(items);
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
  items.forEach((item) => {
    console.log(item, 'this is item')
  })
  return { items, error, loading };
};

export default useTitle;
