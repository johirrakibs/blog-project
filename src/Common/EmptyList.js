import React from 'react';
import './Style/EmptyStyle.css'
import logo from '../assets/images/pic1.jpg';


const EmptyList = () => (
  <div className='emptyList-wrap'>
   <img  src={logo}  alt='photo'/>
  </div>
);

export default EmptyList;