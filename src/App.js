import React from 'react';
import './style.css';
import UsersList from './UsersList';
import CommentsList from './CommentsList';
import PhotosList from './PhotosList';
import AlbumsList from './AlbumsList';
import TodosList from './TodosList';

export default function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'crimson' }}>
        HIGH ORDER COMPONENT CUSTOM HOOK CONTROLL AND UNCONTROLL COMPONENT
      </h1>
      <div className="app-container">
        <UsersList />
        <CommentsList />
        <PhotosList />
        {/* <AlbumsList /> */}
        <TodosList />
      </div>
    </>
  );
}
