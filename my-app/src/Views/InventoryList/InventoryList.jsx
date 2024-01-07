// src/components/InventoryList.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './InventoryList.css';

export const InventoryList = () => {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: 'Item 1', quantity: 10, location: 'Location A', partNumber: 'ABC123', status: 'In Stock' },
  ]);

  const [isAddingNewItem, setIsAddingNewItem] = useState(false);
  
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: 0,
    location: '',
    partNumber: '',
    status: 'In Stock',
  });

  const updateItem = (id, field, value) => {
    setInventoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleEditItem = (id) => {
    setInventoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
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
      name: '',
      quantity: 0,
      location: '',
      partNumber: '',
      status: 'In Stock',
    });
  };

  const handleCancelAddNewItem = () => {
    setIsAddingNewItem(false);
    setNewItem({
      name: '',
      quantity: 0,
      location: '',
      partNumber: '',
      status: 'In Stock',
    });
  };

  const handleSaveItem = (id) => {
    setInventoryItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };
const handleDeleteItem = (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    if (!isConfirmed) return;
    setInventoryItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };
  return (
    <>
      <h2 className='inventory-title'>Inventory List</h2>
      <button className="add-item-button" onClick={handleAddNewItem}>
        Add New Item
      </button>
    <div className="inventory-container">
      <ul className="inventory-list">
        {inventoryItems.map((item) => (
          <li key={item.id} className="inventory-item">
            <div className="item-detail">
              <strong>Name:</strong>
              {item.isEditing ? (
                <input
                  className="edit-input"
                  type="text"
                  value={item.name}
                  onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                  autoFocus
                />
              ) : (
                <span className="editable-text" onClick={() => handleEditItem(item.id)}>
                  {item.name}
                </span>
              )}
            </div>
            <div className="item-detail">
              <strong>Quantity:</strong>
              <input
                className="edit-input"
                type="number"
                value={item.quantity}
                onChange={(e) => updateItem(item.id, 'quantity', e.target.value)}
              />
            </div>
            <div className="item-detail">
              <strong>Location:</strong>
              <input
                className="edit-input"
                type="text"
                value={item.location}
                onChange={(e) => updateItem(item.id, 'location', e.target.value)}
              />
            </div>
            <div className="item-detail">
              <strong>Part Number:</strong>
              <input
                className="edit-input"
                type="text"
                value={item.partNumber}
                onChange={(e) => updateItem(item.id, 'partNumber', e.target.value)}
              />
            </div>
            <div className="item-detail">
              <strong>Status:</strong>
              <select
                className="status-dropdown"
                value={item.status}
                onChange={(e) => updateItem(item.id, 'status', e.target.value)}
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Backordered">Backordered</option>
              </select>
            </div>
            <div className='item-btns'>
            {item.isEditing ? (
              <button className="save-button" onClick={() => handleSaveItem(item.id)}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={() => handleEditItem(item.id)}>
                Edit
              </button>
            )}
               <button className="edit-button" onClick={() => handleDeleteItem(item.id)}>
                Delete
              </button>
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
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>
            <div className="input-container">
              <strong>Quantity:</strong>
              <input
                className="edit-input"
                type="number"
                value={newItem.quantity}
                onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
              />
            </div>
            <div className="input-container">
              <strong>Location:</strong>
              <input
                className="edit-input"
                type="text"
                value={newItem.location}
                onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
              />
            </div>
            <div className="input-container">
              <strong>Part Number:</strong>
              <input
                className="edit-input"
                type="text"
                value={newItem.partNumber}
                onChange={(e) => setNewItem({ ...newItem, partNumber: e.target.value })}
              />
            </div>
            <div className="input-container">
              <strong>Status:</strong>
              <select
                className="status-dropdown"
                value={newItem.status}
                onChange={(e) => setNewItem({ ...newItem, status: e.target.value })}
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Backordered">Backordered</option>
              </select>
            </div>
            <button className="save-button" onClick={handleSaveNewItem}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelAddNewItem}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};


