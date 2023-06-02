import React from 'react'

const Card = ({title, des, icon}) => {
  return (
    <div className="w-full h-80 px-10 py-8 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className='h-72 overflow-y-hidden'>
        <div className='flex flex-col gap-6 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
          <div>
            <span className='text-5xl text-designColor'>{icon}</span>
          </div>
          <div className='flex flex-col gap-6'>
            <h2 className="text-2xl font-titleFont font-bold text-gray-300">{title}</h2>
            <p className='base'>{des}</p>
            <span>
              <div className='w-full border-b-[2px] border-b-designColor'></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card