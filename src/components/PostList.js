// PostList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, incrementShares, toggleSave, addPost } from '../actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(''); // Add this line

  useEffect(() => {
    // Simulate API call
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the data to Redux store
        data.forEach((post) => dispatch(addPost(post)));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [dispatch]);

  const posts = useSelector((state) => state.posts);

  const handleComment = (postId, comment) => {
    dispatch(addComment(postId, comment));
  };

  const handleShare = (postId) => {
    dispatch(incrementShares(postId));
  };

  const handleSave = (postId) => {
    dispatch(toggleSave(postId));
  };

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <p>{post.caption}</p>
            <input
              type="text"
              placeholder="Add a comment..."
              value={comment} // Use the comment state variable here
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={() => handleComment(post.id, comment)}>Comment</button>
            <button onClick={() => handleShare(post.id)}>Share</button>
            <button onClick={() => handleSave(post.id)}>
              {post.saved ? 'Unsave' : 'Save'}
            </button>
            <ul>
              {post.comments.map((comment, idx) => (
                <li key={idx}>{comment}</li>
              ))}
            </ul>
            <p>Shares: {post.shares}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
