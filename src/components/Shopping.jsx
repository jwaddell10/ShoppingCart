import useTitle from "./FetchAPI.jsx";

const Shopping = () => {
    const { items, error, loading } = useTitle();
    console.log(items, 'this is items')
    
  return (
    <>
      <h1>Items</h1>
    </>
  );
};

export default Shopping;
