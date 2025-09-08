import {
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import React from 'react'
import Home from './pages/Home';
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import WriteArticle from "./pages/WriteArticle";
import BlogTitle from "./pages/BlogTitle";

export default function App() {
  return (
   <div>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ai' element={<Layout/>}>
           <Route index element={<Dashboard/>} />
            <Route path="write-article" element={<WriteArticle/>} />
            <Route path="blog-title" element={<BlogTitle/>} />
      </Route>
    </Routes>
   </div>
  )
}

