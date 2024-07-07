import React, { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostListData } from "../store/Post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className=" post-card card" style={{ width: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        Inbox
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => {
            deletePost(post.id);
          }}
        >
          <MdOutlineDelete />
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary m-1  ">
            {tag}
          </span>
        ))}
        <div className="alert alert-success mt-3" role="alert">
          this post has been liked by {post.reactions.likes} people
        </div>
      </div>
    </div>
  );
};

export default Post;
