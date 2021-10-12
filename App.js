import React, { useEffect, useState }  from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () =>{
  const [ city , setCity] = useState("lucknow");
  const [search , setSearch] = useState("lucknow");
  useEffect( () =>{
    const fetchApi = async () =>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ae14c813688a2b98915ee0ee19c1d506`
      const response = await fetch(url);
      // console.log(reponse);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  },[search])
  return <>
   <div className="first_div">
 <div className="second_div">
 <input type="search" style={{borderRadius: '80px' , padding:"15px" , border:"3px solid black" }} 
 onChange={ (event) =>{
   setSearch(event.target.value)

 }} placeholder="Search Location" />
 </div>
 <div className="third_div">
 <img src="https://cdn-icons.flaticon.com/png/128/3093/premium/3093298.png?token=exp=1634065144~hmac=8b4c0846fb73baf2d62ea02aa6149871"
 width="60px" height="60px" alt=""/>
 <h2  style={{color:"black" , }}>
   {search}
 </h2 >
 <h3 style={{color:"black" , fontFamily:"times new roman" }}>
 32°C Mostly Sunny
 </h3>
 <h5 style={{color:"black" , fontFamily:"times new roman" }}> Precipitation: 4%
 <br/>
Humidity: 75%
<br/>
Wind: 5 km/h</h5>
 </div>
</div>
</>
  
}
export default App;
