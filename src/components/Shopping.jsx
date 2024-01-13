import useTitle from "./FetchAPI.jsx";

const Shopping = () => {
  const { items, error, loading } = useTitle();
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>Items</h1>
      
    </>
  );
};

export default Shopping;
