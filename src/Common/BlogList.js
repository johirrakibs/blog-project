import React from "react";
import BlogItem from "./BlogItem";
import './Style/BlogListStyle.css';


const BlogList = ({blogs}) =>{
    return(
        <div className="bloglist-wrap">
        {blogs.map((blog)=>(
             <BlogItem blog={blog} key={blog.id} 
             />))}
        </div>
    );
}
export default BlogList;