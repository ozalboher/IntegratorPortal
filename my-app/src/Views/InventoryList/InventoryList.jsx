// src/components/InventoryList.js
import React, { useState } from "react";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { v4 as uuidv4 } from "uuid";
import "./InventoryList.css";

export const InventoryList = () => {
  const [oldInventoryItems, setOldInventoryItems] = useState([]);
  const [inventoryItems, setInventoryItems] = useState([
    {
      id: 1,
      name: "Item 1",
      quantity: 10,
      location: "Location A",
      partNumber: "ABC123",
      serialNumber: "123456",
      status: "in-stock",

    },
  ]);

  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  const [newItem, setNewItem] = useState({
    name: "",
    quantity: 0,
    location: "",
    partNumber: "",
    status: "in-stock",
  });

  const updateItem = (id, field, value) => {
    setInventoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  const handleSaveItem = (id) => {
    setInventoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };
  const handleEditItem = (id) => {
    setInventoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
    setOldInventoryItems(inventoryItems);
  };
  const handleCancelItem = () => {
    setInventoryItems(oldInventoryItems);
  };

  const handleAddNewItem = () => {
    setIsAddingNewItem(true);
  };

  const handleSaveNewItem = () => {
    setInventoryItems((prevItems) => [
      ...prevItems,
      {
        id: uuidv4(),
        ...newItem,
        isEditing: false,
      },
    ]);
    setIsAddingNewItem(false);
    setNewItem({
      name: "",
      quantity: 0,
      location: "",
      partNumber: "",
      status: "in-stock",
    });
  };

  const handleCancelAddNewItem = () => {
    setIsAddingNewItem(false);
    setNewItem({
      name: "",
      quantity: 0,
      location: "",
      partNumber: "",
      status: "in-stock",
    });
  };

  const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (!isConfirmed) return;
    setInventoryItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };
  return (
    <>
      <div className="page-content">
        <h1 className="inventory-title">Inventory List</h1>
        <SearchBar/>
        <button className="general-btn" onClick={handleAddNewItem}>
          Add New Item
        </button>
        <div className="inventory-container">
          <ul className="inventory-list">
            {inventoryItems.map((item) => (
              <li key={item.id} className="inventory-item">
                <div>
                  <span className={`status ${item.status}`}></span>
                </div>
                <div className="item-detail">
                  <strong>Name:</strong>
                  {item.isEditing ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, "name", e.target.value)
                      }
                      autoFocus
                    />
                  ) : (
                    <span
                      className="editable-text" /*  onClick={() => handleEditItem(item.id)} */
                    >
                      {item.name}
                    </span>
                  )}
                </div>
                <div className="item-detail">
                  <strong>Quantity:</strong>
                  {item.isEditing ? (
                    <input
                      className="edit-input"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(item.id, "quantity", e.target.value)
                      }
                    />
                  ) : (
                    <span
                      className="editable-text" /*  onClick={() => handleEditItem(item.id)} */
                    >
                      {item.quantity}
                    </span>
                  )}
                </div>
                <div className="item-detail">
                  <strong>Location:</strong>
                  {item.isEditing ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.location}
                      onChange={(e) =>
                        updateItem(item.id, "location", e.target.value)
                      }
                    />
                  ) : (
                    <span
                      className="editable-text" /* onClick={() => handleEditItem(item.id)} */
                    >
                      {item.location}
                    </span>
                  )}
                </div>
                <div className="item-detail">
                  <strong>Part Number:</strong>
                  {item.isEditing ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.partNumber}
                      onChange={(e) =>
                        updateItem(item.id, "partNumber", e.target.value)
                      }
                    />
                  ) : (
                    <span
                      className="editable-text" /* onClick={() => handleEditItem(item.id)} */
                    >
                      {item.partNumber}
                    </span>
                  )}
                </div>
                <div className="item-detail">
                  <strong>Serial Number:</strong>
                  {item.isEditing ? (
                    <input
                      className="edit-input"
                      type="text"
                      value={item.serialNumber}
                      onChange={(e) =>
                        updateItem(item.id, "partNumber", e.target.value)
                      }
                    />
                  ) : (
                    <span
                      className="editable-text" /* onClick={() => handleEditItem(item.id)} */
                    >
                      {item.serialNumber}
                    </span>
                  )}
                </div>
                <div className="item-detail">
                  <strong>Status:</strong>
                  <select
                    className="status-dropdown"
                    value={item.status}
                    onChange={(e) =>
                      updateItem(item.id, "status", e.target.value)
                    }
                  >
                    <option value="in-stock">In Stock</option>
                    <option value="out-of-stock">Out of Stock</option>
                    <option value="on-order">On Order</option>
                  </select>
                </div>
                <div className="item-btns">
                  {item.isEditing ? (
                    <button
                      className="general-btn"
                      onClick={() => handleSaveItem(item.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="general-btn"
                      onClick={() => handleEditItem(item.id)}
                    >
                      Edit
                    </button>
                  )}
                  {item.isEditing ? (
                  <button
                    className="general-btn"
                    onClick={() => handleCancelItem()}
                    >
                      Cancel
                  </button>
                      ) : (
                  <button
                    className="general-btn delete"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {isAddingNewItem && (
            <div className="modal">
              <div className="modal-content">
                <h3>Add New Item</h3>
                <div className="input-container">
                  <strong>Name:</strong>
                  <input
                    className="edit-input"
                    type="text"
                    value={newItem.name}
                    onChange={(e) =>
                      setNewItem({ ...newItem, name: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <strong>Quantity:</strong>
                  <input
                    className="edit-input"
                    type="number"
                    value={newItem.quantity}
                    onChange={(e) =>
                      setNewItem({ ...newItem, quantity: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <strong>Location:</strong>
                  <input
                    className="edit-input"
                    type="text"
                    value={newItem.location}
                    onChange={(e) =>
                      setNewItem({ ...newItem, location: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <strong>Part Number:</strong>
                  <input
                    className="edit-input"
                    type="text"
                    value={newItem.partNumber}
                    onChange={(e) =>
                      setNewItem({ ...newItem, partNumber: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <strong>Status:</strong>
                  <select
                    className="status-dropdown"
                    value={newItem.status}
                    onChange={(e) =>
                      setNewItem({ ...newItem, status: e.target.value })
                    }
                  >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Backordered">Backordered</option>
                  </select>
                </div>
                <button className="save-button" onClick={handleSaveNewItem}>
                  Save
                </button>
                <button
                  className="cancel-button"
                  onClick={handleCancelAddNewItem}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
