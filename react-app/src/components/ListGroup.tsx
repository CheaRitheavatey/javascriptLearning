// import type React from "react";

import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  // function
  onSelectedItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {
  // items = [];

  // hook
  const [selectIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No item found</p> : null;
  // or a method
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // event handling
  // const handleClick = (event: React.MouseEvent<HTMLElement>) =>
  //   console.log(event);
  return (
    // componenet, so it cannot return more than 1 componenet
    // so solve this problem we can put everything in div

    // another way is to use fragment

    // another way is an empty
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            // onClick={(event) => console.log(items, index, event)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(items);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
