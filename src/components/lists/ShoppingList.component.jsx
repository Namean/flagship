import React, { useState } from "react";

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: Date.now(), name: newItem.trim() }]);
      setNewItem("");
    } // displayToastMessageAddItem
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    // displayToastMessageRemoveItem
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Add item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
