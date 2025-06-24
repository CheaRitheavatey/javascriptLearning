// import Message from "./Message";
import { Children, type ReactNode } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "San Fransisco", "Paris", "London"];
  const handleSelectItem = (item: string): void => {
    console.log(item);
  };
  let count = 0;
  // return <div><Message></Message></div>
  return (
    // below is for Alert
    <div>
      {/* <Alert>hello</Alert> */}
      <Button color="secondary" onClick={() => console.log("clicked")}>
        Dynamic
      </Button>
    </div>

    // below is for list group
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectedItem={handleSelectItem}
    //   ></ListGroup>
    // </div>
  );
}

export default App;
