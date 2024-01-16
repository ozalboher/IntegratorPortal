// TaskPage.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import './TasksPage.css'; // Import the CSS stylesheet

export const TasksPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Track the index of the task being edited
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [statusFilter, setStatusFilter] = useState('all');

  const openModal = (index) => {
    setModalIsOpen(true);
    setEditIndex(index);
    if (index !== null) {
      // If editing, populate fields with existing task information
      const taskToEdit = tasks[index];
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status);
    } else {
      // If creating a new task, clear input fields
      setTitle('');
      setDescription('');
      setStatus('open');
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditIndex(null);
  };

  const handleCreateTask = () => {
    const newTask = {
      title,
      description,
      status,
      dateAdded: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    if (editIndex !== null) {
      // If editing, replace the existing task with the edited one
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
    } else {
      // If creating a new task, add it to the tasks list
      setTasks([...tasks, newTask]);
    }

    closeModal();
  };

  const handleDeleteTask = (index) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    }
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === 'all') return true;
    return task.status === statusFilter;
  });

  return (
    <div className="task-page">
      <header className="header">
        <div className="header-title">Your Tasks</div>
        <button className="create-task-btn" onClick={() => openModal(null)}>
          Create Task
        </button>
      </header>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <h2>{editIndex !== null ? 'Edit Task' : 'Create Task'}</h2>
        <label>
          Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
        <div className="modal-buttons">
          <button className="create-task-btn" onClick={handleCreateTask}>
            {editIndex !== null ? 'Save Task' : 'Create Task'}
          </button>
          <button className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </Modal>

      <div className="filter-section">
        <label>
          Filter by Status:
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>
      </div>

      <div className="tasks-list">
        {filteredTasks.map((task, index) => (
          <div key={index} className="task-item">
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <div className="task-details">
              <p className={`status ${task.status}`}>{task.status}</p>
              <p>Date Added: {task.dateAdded}</p>
              <div className="task-actions">
                <button onClick={() => openModal(index)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


