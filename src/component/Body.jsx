import React from 'react'
import Card from './Card';

const Body = (props) => { 
    const courses = props.courses;
    const Category = props.Category;
   

    function getCourses(){
        if(Category === "All"){
            let allCourses = [];
        Object.values(courses).forEach(array =>{
         array.forEach(coursedata =>{
            allCourses.push(coursedata);
        }) 
    })
    return allCourses;
        }
    else {
        return courses[Category];    
    }


    }


    

  return (
    <div className='w-full bg-bgDark2'>
   <div className=' flex flex-wrap w-3/4 mx-auto gap-5 '>
    {
        getCourses().map((course)=> (<Card key={course.id} course={course}/>))
    }

</div>
</div>
  )
}

export default Body