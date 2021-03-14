const blogsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_BLOGS':
      return action.data;
    case 'NEW_BLOG':
      return state.concat(action.data);
    case 'UPDATED':
      return state.map((blog) => (blog.id !== action.data.blog.id
        ? blog : { ...action.data.blog, user: action.data.user }));
    case 'DELETE':
      // eslint-disable-next-line no-case-declarations
      const index = state.findIndex((blog) => blog.id === action.data);
      // eslint-disable-next-line no-case-declarations
      const array = [...state];
      array.splice(index, 1);
      return [...array];
    default:
      return state;
  }
};

export default blogsReducer;
