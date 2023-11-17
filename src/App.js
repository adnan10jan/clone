// App.js
import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  return (
    <div>
      <h1>Instagram Clone</h1>
      <PostForm />
      <PostList />
      
    </div>
  );
};

export default App;
