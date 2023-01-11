import React from "react";
import './Style/BlogItemStyle.css';
import Chip from './Chip';
import { Link } from "react-router-dom";


const BlogItem = ({blog:{
    id, 
    description, 
    title,
     createsAt, 
     authorName, 
     authorAvatar,
    category,
    cover,
},
}) =>{
    return(
        <div className="blogItem-wrap">
        <img src={cover} alt="cover" className="blogItem-cover"/>
        <Chip label={category}/>
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
       
       <footer>
       <div className="blogItem-author">
       <img src={authorAvatar} alt="avater" />
       <div>
       <h6>{authorName}</h6>
       <p>{createsAt}</p>
       </div>
       </div>
      

<Link className="blogItem-link" to={`/blog/${id}`}>Click</Link>
       </footer>


        </div>
    )
}
export default BlogItem