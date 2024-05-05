import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='flex flex-col gap-2'>
        <h1 className=' text-4xl font-semibold text-gray-800 mt-7'>Explore our menu</h1>
        <p className=' text-gray-500 text-base max-w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sapiente. Maxime itaque suscipit provident minima quod dicta rerum debitis, nihil, illo aspernatur repellat dolores dolore fugit? Ipsam ullam corrupti nesciunt!</p>
        <div className='flex items-center justify-between text-center gap-10 my-5'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className=''>
                        <img className={`w-[7.5vw] min-w-16 rounded-full cursor-pointer transition-all duration-150 ${category === item.menu_name? " border-2 border-orange-500": ""}`} src={item.menu_image} alt="" />
                        <p className='text-base mt-3 cursor-pointer font-semibold'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className=' mx-0 my-4 h-1 bg-orange-400' />
    </div>
  )
}

export default ExploreMenu