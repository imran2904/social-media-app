import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListData } from "../store/Post-list-store";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeMessege from "./WelcomeMessege";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div className="container">
      <div className="row">
        {fetching && <LoadingSpinner />}
        {!fetching && postList.length === 0 && <WelcomeMessege />}
        {!fetching &&
          postList.map((post) => (
            <div key={post.id} className="col-md-6 mb-4">
              <Post post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostList;
