// import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper for dropdowns

import { Children, useState, type ReactNode } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
// import ListGroup from "./components/ListGroup";
function App() {
  const items = [
    { name: "Kroma", category: "Clothes" },
    { name: "Silk Scarf", category: "Clothes" },
    { name: "Khmer Pants", category: "Clothes" },
    { name: "Traditional Clothes", category: "Clothes" },
    { name: "Smoked Fish", category: "Food & Drink" },
    { name: "Mango Jam", category: "Food & Drink" },
    { name: "Dried Mango", category: "Food & Drink" },
    { name: "Cavassa Powder", category: "Food & Drink" },
    { name: "Coconut Balm", category: "Gifts" },
    { name: "Ring", category: "Gifts" },
    { name: "Palm Cutlery", category: "Gifts" },
    { name: "Wallet", category: "Gifts" },
  ];

  const handleSelectItem = (item: string): void => {
    console.log(item);
  };
  const [alertvisible, setAlertVisible] = useState(false);
  const [selectCategory, setSelectCategory] = useState<string | null>(null);
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const filteredItems = selectCategory
    ? items.filter((item) => item.category === selectCategory)
    : items;
  // return <div><Message></Message></div>
  return (
    // below is for Alert
    <>
      <NavBar
        categories={categories}
        onCategorySelect={(category) => setSelectCategory(category)}
      ></NavBar>
      <div className="container">
        <Card items={filteredItems}></Card>
      </div>
    </>
    // <div>
    //   {alertvisible && (
    //     <Alert onClose={() => setAlertVisible(false)}>hello</Alert>
    //   )}
    //   <Button color="secondary" onClick={() => setAlertVisible(true)}>
    //     Dynamic
    //   </Button>
    // </div>

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
