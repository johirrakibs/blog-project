import React, { useState } from "react";
import SearchBar from "../Common/SearchBar";
import Header from './../Common/Header';
import BlogList from './../Common/BlogList';
import { blogList } from './../config/data';
import EmptyList from './../Common/EmptyList';


const Home = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');


    const handleSeachSubmit = event =>{
        event.preventDefault();
        handleSearchResults()
    }

    const handleSearchResults =() =>{
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };
    const handleClearSearch =() =>{
        setBlogs(blogList);
        setSearchKey(''); 

    };

    return(
        <div>
       <Header />

       <SearchBar 
       value={searchKey}
       clearSearch={handleClearSearch}
       formSubmit={handleSeachSubmit}
       handleSearchKey={(e) => setSearchKey(e.target.value)}
       />

       {!blogs.length ? <EmptyList /> : <BlogList  blogs={blogs} />}
        </div>
    );
};

export default Home;