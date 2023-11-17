import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postActions';

const PostForm = () => {
  const [caption, setCaption] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (caption.trim()) {
      dispatch(addPost({ caption }));
      setCaption('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
