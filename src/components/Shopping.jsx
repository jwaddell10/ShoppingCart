import useTitle from "./FetchAPI.jsx";

const Shopping = () => {
    const { items, error, loading } = useTitle();
    items.map((item) => {
        console.log(item, 'this is item')
    })
    
  return (
    <>
      <h1>Items</h1>
    </>
  );
};

export default Shopping;
