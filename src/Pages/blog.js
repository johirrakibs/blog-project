import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { blogList } from './../config/data';
import EmptyList from './../Common/EmptyList';
import './Style/blogStyle.css'
import Chip from "../Common/Chip";


const Blog = () => {
const {id} = useParams();
const [blog, setBlog] = useState(null);

useEffect(() =>{
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if(blog){
        setBlog(blog);
    }
}, []);



    return(
        <div>
       <Link className='blog-goBack' to='/'>
       Go to Back
       </Link>

       {
        blog ? (<div className=" blog-wrap">
        <header>
        <p className="blog-data">Published {blog.createdAt}</p>
        <h1>{blog.title}</h1>
        <div className="blog-subcategory">
        {blog.subCategory.map((category, index) =><div>
            <Chip key={index} label={category}/>
           
         
            </div>
            )}
            </div>
        </header>
        <img src={blog.cover} alt='cover' />
        <p className='blog-desc'>{blog.description}</p>
        </div>
        ): (
            <EmptyList />
        )
        
       };


        </div>
    );
};

export default Blog