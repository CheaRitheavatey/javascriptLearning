// import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Fransisco", "Paris", "London"];
  const handleSelectItem = (item: string): void => {
    console.log(item);
  };
  // return <div><Message></Message></div>
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectItem}
      ></ListGroup>
    </div>
  );
}

export default App;
