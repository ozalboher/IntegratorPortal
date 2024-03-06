import React, { useState, useEffect } from 'react';
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
  const [project, setProject] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');
  const [showFiltered, setShowFiltered] = useState(false);

  useEffect(() => {
    console.log('the use effect ran');
    if (statusFilter === 'all' && dateFilter === 'all') {
      setShowFiltered(false);
    } else {
      const sortedTasks = handleSort(statusFilter, dateFilter, tasks);
      setFilteredTasks(sortedTasks);
      setShowFiltered(true);
    }
  }, [statusFilter, dateFilter]);

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

  const handleSaveTask = () => {
    if (editIndex !== null) {
      const newTask = handleEditTask(editIndex);
      const updatedTasks = [...tasks];
      const taskIndex = updatedTasks.findIndex(task => task.id === editIndex);
      if (taskIndex !== -1) {
        updatedTasks[taskIndex] = newTask;
        setTasks(updatedTasks);
        setFilteredTasks(updatedTasks);
      }
     /* setTasks(updatedTasks); */
    } else {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        status,
        dateAdded: moment().format('DD-MM-YYYY HH:mm:ss'),
      };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
       if (dateFilter === 'all' && statusFilter === 'all'){
        setShowFiltered(false);
       }
       else {
        const sortedTasks = handleSort(statusFilter, dateFilter, updatedTasks);
        setFilteredTasks(sortedTasks);
       } 
      }
      closeModal();
  };
  const test = () => {
    console.log('tasks: ', tasks);
    console.log('filtered tasks: ', filteredTasks);
  };
  const handleDeleteTask = (indexToDelete) => {
    /* const isConfirmed = window.confirm('Are you sure you want to delete this task?'); */
    const isConfirmed = true;
    if (isConfirmed) {
      const prevTasks = [...tasks];
      const updatedTasks = prevTasks.filter((task) => task.id !== indexToDelete);
      setTasks(updatedTasks);
    };
    setShowFiltered(false);                                     
  };

  const handleEditTask = (editIndex) => {
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task.id === editIndex);
    const dateAdded = updatedTasks[taskIndex].dateAdded;
    const newTask = {
      id: editIndex,
      title: title,
      description: description,
      status: status,
      dateAdded: dateAdded,
      dateEdited: moment().format('DD-MM-YYYY HH:mm:ss'),
    };
    return newTask;
  };
  // editIndex, status, tasks
  const handleTaskDone = (taskId) => {
    setStatus('done');
    const newTask = handleEditTask(taskId);
    const updatedTasks = [...tasks];
    const taskIndex = updatedTasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      newTask.status = 'done';
      updatedTasks[taskIndex] = newTask;
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    }
  };

      /*   const handleStatusChange = (newStatus) => {
           setStatus(newStatus);
  }; */

  const handleFilterStatusChange = (e) => {
    const newStatusFilter = e.target.value;
    setStatusFilter(newStatusFilter);
    const tasksToFilter = [...tasks]
    const filteredTasks = handleSort(newStatusFilter, dateFilter, tasksToFilter);
    console.log(filteredTasks);
    setFilteredTasks(filteredTasks);
    setShowFiltered(true);
  };
  const handleFilterDateChange = (e) => {
    const newDateFilter = e.target.value;
    setDateFilter(newDateFilter);
    const tasksToFilter = [...tasks]
    const filteredTasks = handleSort(statusFilter, newDateFilter, tasksToFilter);
    setFilteredTasks(filteredTasks);
    setShowFiltered(true);
  };
    const handleSort = (statusFilter, dateFilter, tasksToFilter) => {
     const Filtered = tasksToFilter.filter((task) => statusFilter === 'all' || task.status === statusFilter).sort((a, b) => {
      if (dateFilter === 'most-recent'){
        return moment(b.dateAdded, 'DD-MM-YYYY HH:mm:ss').diff(moment(a.dateAdded, 'DD-MM-YYYY HH:mm:ss'));
      } else if (dateFilter === 'oldest'){
        return moment(a.dateAdded, 'DD-MM-YYYY HH:mm:ss').diff(moment(b.dateAdded, 'DD-MM-YYYY HH:mm:ss'));
      } else {
       return 0;
      } 
    });
    return Filtered;
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
            <label>
              Project:
              <select value={project} onChange={(e) => setProject(e.target.value)}>
                <option value="litening">Lite</option>
                <option value="xr">XR</option>
                <option value="toplight">TOP</option>
                <option value="hydra">Hydration</option>
                <option value="bluebird">BB</option>
              </select>
            </label>
          </div>
          <div>
            <div className="modal-buttons">
              <button className="create-task-btn" onClick={handleSaveTask}>
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
                <div>
                <p>Date Added: {task.dateAdded}</p>
                {task.dateEdited&&<p style={{ margin: '0px', fontWeight:'100' }}>Edited: {task.dateEdited}</p>}
                </div>
              </div>
               <div className="task-details">
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="task-actions">
                  <div>
                  <button className="edit-btn" onClick={() => openModal(task.id)}>Edit</button>
                  <button style={{ marginLeft: '5px'}} className="edit-btn" onClick={() => handleTaskDone(task.id)}>Set as done</button>
                  </div>
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
