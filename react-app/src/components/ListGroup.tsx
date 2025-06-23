function ListGroup() {
  let items = ["New York", "San Fransisco", "Paris", "London"];
  // items = [];

  const message = items.length === 0 ? <p>No item found</p> : null;
  // or a method
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  return (
    // componenet, so it cannot return more than 1 componenet
    // so solve this problem we can put everything in div

    // another way is to use fragment

    // another way is an empty
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No item found</p>}
      {}
      <ul className="list-group">
        {items.map((items) => (
          <li className="list-group-item">{items}</li>
        ))}
        <li className="list-group-item active" aria-current="true">
          An active item
        </li>
      </ul>
    </>
  );
}

export default ListGroup;
