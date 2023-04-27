import shortid from "shortid";

//selectors
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, postId) => posts.find(({ id }) => id === postId);

// action
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const CREATE_POST = createActionName('CREATE_POST');

// action creators
export const removePost = payload => ({ type: REMOVE_POST, payload });
export const createPost = payload => ({ type: CREATE_POST, payload });

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(({ id }) => id !== action.payload);
    case CREATE_POST:
      console.log(action.payload);
      return [...statePart, { id: shortid(), ...action.payload }];
    default:
      return statePart;
  };
};

export default postsReducer;