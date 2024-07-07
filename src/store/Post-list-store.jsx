import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPost: () => {},
  fetching: false,
});

const PostListReducer = (currePostList, action) => {
  let newPostList = currePostList;
  if (action.type === "DELETE_POST") {
    newPostList = currePostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currePostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: { posts },
    });
  };

  const deletePost = useCallback(
    (postid) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postid,
        },
      });
    },
    [dispatchPostList]
  );
  const [fetching, setfetching] = useState(false);
  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setfetching(false);
      });
    return () => {
      console.log("cleaning up useEffect");
    };
  }, []);

  return (
    <PostListData.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostListData.Provider>
  );
};

export default PostListProvider;
