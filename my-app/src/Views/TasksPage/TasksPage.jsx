import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import './TasksPage.css';

export const TasksPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFiltered, setShowFiltered] = useState(false);
  const [dateFilter, setDateFilter] = useState('all');


  Modal.setAppElement('#root');

  const openModal = (id) => {
    setModalIsOpen(true);
    setEditIndex(id);
    const taskToEdit = id !== null ? tasks.find(task => task.id === id) : null;
  
    setTitle(taskToEdit?.title || '');
    setDescription(taskToEdit?.description || '');
    setStatus(taskToEdit?.status || 'open');
  };
  

  const closeModal = () => {
    setModalIsOpen(false);
    setEditIndex(null);
  };

  const handleCreateTask = () => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status,
      dateAdded: moment().format('DD-MM-YYYY HH:mm:ss'),
    };
    console.log(editIndex);
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, newTask]);
    }
    setShowFiltered(false);
    closeModal();
  };
  const test = () => {
    console.log(tasks);
  };
  const handleDeleteTask = (indexToDelete) => {
    /* const isConfirmed = window.confirm('Are you sure you want to delete this task?'); */
    const isConfirmed = true;
    if (isConfirmed) {
      const updatedTasks = tasks.filter((task) => task.id !== indexToDelete);
      setTasks(updatedTasks);
    }
    setShowFiltered(false);
  };
     /*   const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  }; */

  const handleFilterStatusChange = (e) => {
    const newStatusFilter = e.target.value;
    setStatusFilter(newStatusFilter);
    const filteredTasks = handleSort(newStatusFilter, dateFilter);
    setFilteredTasks(filteredTasks);
    setShowFiltered(true);
  };
  const handleFilterDateChange = (e) => {
    const newDateFilter = e.target.value;
    setDateFilter(newDateFilter);
    const filteredTasks = handleSort(statusFilter, newDateFilter);
    setFilteredTasks(filteredTasks);
    setShowFiltered(true);
  };
    const handleSort = (statusFilter, newDateFilter) => {
    const filteredAndSortedTasks = [...tasks]
    .filter((task) => statusFilter === 'all' || task.status === statusFilter)
    .sort((a, b) => {
      if (newDateFilter === 'most-recent') {
        return moment(b.dateAdded, 'DD-MM-YYYY HH:mm:ss').diff(moment(a.dateAdded, 'DD-MM-YYYY HH:mm:ss'));
      } else if (dateFilter === 'oldest') {
        return moment(a.dateAdded, 'DD-MM-YYYY HH:mm:ss').diff(moment(b.dateAdded, 'DD-MM-YYYY HH:mm:ss'));
      } else {
        return 0;
      }
    });
    return filteredAndSortedTasks;
  };
  const displayTasks = showFiltered ? filteredTasks : tasks;
  return (
    <div className="task-page">
      <header className="task-header">
        <h1>Your Tasks</h1>
        <button className="create-task-btn" onClick={() => openModal(null)}>
          Create Task
        </button>
      </header>
      <div className="filter-section">
        <label>
          Filter by status:
          <select className='filter-selection' value={statusFilter} onChange={handleFilterStatusChange}>
            <option value="all">All</option>
            <option className='option-open' value="open">Open</option>
            <option className='option-progress' value="in-progress">In Progress</option>
            <option className='option-done' value="done">Done</option>
          </select>
        </label>
        <label>
          Filter by date:
          <select className='filter-selection' value={dateFilter} onChange={handleFilterDateChange}>
            <option value="all">All</option>
            <option value="most-recent">Most Recent</option>
            <option value="oldest">Oldest</option>
          </select>
        </label>
        <button className="create-task-btn" onClick={test}>
                TEST
              </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <div className='modal-box'>
          <div>
            <h2>{editIndex !== null ? 'Edit Task' : 'Create Task'}</h2>
            <label>
              Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
              Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
          </div>
          <div>
            <label>
              Status:
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="open">Open</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </label>
          </div>
          <div>
            <div className="modal-buttons">
              <button className="create-task-btn" onClick={handleCreateTask}>
                {editIndex !== null ? 'Save Task' : 'Create Task'}
              </button>
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="tasks-list">
        {displayTasks.map((task) => (
          <div key={task.id} className="task-item">
            <div className='task-item-content'>
              <div className='task-item-header'>
                <span className={`status ${task.status}`}>{task.status}</span>
                <p>Date Added: {task.dateAdded}</p>
              </div>
              <div className="task-details">
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="task-actions">
                  <button className="edit-btn" onClick={() => openModal(task.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
