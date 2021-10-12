import React, { useState } from "react";
import google from "./Images/googlekeep.png";



const Header = () => {
    const [note , setNote] = useState({
        title:"",
        content:"",
    });
    const InputEvent = (event) =>{
        const value =event.target.value;
        const name = event.target.name;
        // const { name , value} = event.target;
setNote((prevData) => {
    return{
        ...prevData,
        [name]:value,
    }
})

    }        
    const date = new Date().getFullYear();
  return <>
  <div className="first_div">
  <div className="second_div">
     <img src={google} alt="google" width="90px" height="90px"/>
  </div> 
  <div className="third_div">
      <h1> KEEP </h1>
  </div>

  </div>
  <div class="card">
  
  <div class="container">
    <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title"/>
    <textarea typeof="text"  name="content" value={note.content} onChange={InputEvent} placeholder="Write anything....."></textarea>
    <button > <i class="fa fa-plus" ></i> </button>
  </div>
</div>
  <footer>
   <h4> Copyright ©  {date} </h4>

  </footer>
  
  </>
};
export default Header;