import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/home';
import Blog from './Pages/blog';





const App =()=> {
   
    return (
      
       <div className="container">
       
       <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/blog/:id" element={<Blog />} />

       </Routes>
      
</div>
    );
}

export default App