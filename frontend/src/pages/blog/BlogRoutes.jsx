import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loader from "../../components/common/Loader";

const BlogHome = lazy(() => import("./pages/BlogHome"));
const CategoryPage = lazy(() => import("./_components/CategoryPage"));
const TagPage = lazy(() => import("./_components/TagPage"));
const Til = lazy(() => import("./_components/Til"));
const BlogPost = lazy(() => import("./_components/BlogPost"));
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
const UploadBlog = lazy(() => import("./pages/UploadBlog"));

function BlogRoutes() {
  const token = localStorage.getItem("adminToken");

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<BlogHome />} />
        <Route path="/post/:slug" element={<BlogPost />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="tags" element={<TagPage />} />
        <Route path="til" element={<Til />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="register" element={<Register />} /> */}
        <Route
          path="upload-blog"
          element={
            token ? <UploadBlog /> : <Navigate to="/blog/login" replace />
          }
        />
      </Routes>
    </Suspense>
  );
}

export default BlogRoutes;