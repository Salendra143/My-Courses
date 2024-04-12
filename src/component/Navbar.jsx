import React from 'react'

const Navbar = (props) => {

  const Category = props.Category;
  const setCategoy = props.setCategoy;

  function filterHandler(title){
    setCategoy(title)
   
}

  return (
    <div className='w-full bg-bgDark2'>
    <nav className='flex flex-wrap justify-center gap-2 md:gap-5 py-3'>
      {props.info.map((data) => (
        <button
          className={`text-sm md:text-lg px-3 md:px-4 py-2 md:py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200 
          ${Category === data.title ? "bg-opacity-60 border-white " : "bg-opacity-40 border-transparent" }`}
          onClick={() => filterHandler(data.title)}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </nav>
  </div>
  
  
  )
}

export default Navbar