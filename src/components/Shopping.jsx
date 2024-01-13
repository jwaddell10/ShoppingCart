import useTitle from "./FetchAPI.jsx";

const Shopping = () => {
    const { title, error, loading } = useTitle();
    console.log(title, 'this is title')
        
        if (error) return <p>A network error was encountered</p>;
        if (loading) return <p>Loading...</p>;
        
        return (
           <>
            <h1>{title[0].id}</h1>
           </>
            )
}


export default Shopping;