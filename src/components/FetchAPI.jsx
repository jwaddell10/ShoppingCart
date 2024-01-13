import { useEffect, useState } from "react";


const useTitle = () => {
    const [title, setTitle] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products/?categoryId=2', { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('server error');
                }
                return response.json();
            })
            .then((response) => setTitle(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    console.log(title, 'this is title')

    return { title, error, loading };
};

export default useTitle;