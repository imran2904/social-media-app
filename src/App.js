import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  return (
    <BrowserRouter>
      <PostListProvider>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? (
              <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/Home" element={<PostList />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="*" element={<CreatePost />} /> {/* Handle any other routes */}
              </Routes>
            )}
            <Footer />
          </div>
        </div>
      </PostListProvider>
    </BrowserRouter>
  );
}

export default App;
