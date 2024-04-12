import React, { useEffect, useState } from 'react'
import Header from './component/Header'
import Navbar from './component/Navbar'
import { filterData } from './Data'
import Body from './component/Body'
import { apiUrl } from './Data'


const App = () => {
  const [courses ,setcourses] = useState([]);
  const [Category, setCategoy] = useState(filterData[0].title)
  const fetchAPI = async() =>{
    const data = await fetch(apiUrl);
    const json = await data.json();
    setcourses(json.data)
  }
  useEffect(()=>{
    fetchAPI();
},[])




  return (
    <div className='  md:h-screen bg-bgDark2'>
      <div>
        <Header/>
    </div>
    <div>
        <Navbar info={filterData} Category={Category}  setCategoy={setCategoy}/>
    </div>
    <div>
        <Body courses={courses} Category={Category}/>
    </div>

</div>
  )
}

export default App