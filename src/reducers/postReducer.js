const postReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
      case 'ADD_POST':
        return {
          ...state,
          posts: [...state.posts, action.payload],
        };
      case 'ADD_COMMENT':
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload.postId
              ? { ...post, comments: [...post.comments, action.payload.comment] }
              : post
          ),
        };
      case 'INCREMENT_SHARES':
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload ? { ...post, shares: post.shares + 1 } : post
          ),
        };
      case 'TOGGLE_SAVE':
        return {
          ...state,
          posts: state.posts.map((post) =>
            post.id === action.payload ? { ...post, saved: !post.saved } : post
          ),
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
  