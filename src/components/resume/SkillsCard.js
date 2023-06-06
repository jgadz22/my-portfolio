import React from 'react'

const SkillsCard = ({ title, img, des }) => {
  return (
    <>
        <div className="w-full h-[250px] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex justify-between item-center shadow-shadowOne relative mb-10 group">
            <div className="w-1/4 flex items-center left-0 group-hover:scale-110 ease-in duration-300">
                <img src={img} width='75' height='75' alt='/'/>
            </div>
            <div className="w-3/4 h-full flex items-center justify-center relative">
                <div className='w-full h-full flex items-center justify-center z-10 opacity-100 group-hover:opacity-0 duration-300 group-hover:-translate-x-20 group-hover:-translate-y-10'>
                    <span className='text-4xl font-bold text-designColor capitalize'>{title}</span>
                </div>
                <div className="w-full h-full flex items-center left-0 z-5 absolute opacity-0 group-hover:opacity-100 duration-300 -translate-x-20 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0">
                    <p className='text-md font-bodyFont'>
                        <span className='text-xl font-bold text-designColor capitalize pr-[4px]'>
                            {title}
                        </span>
                        {des}
                    </p>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default SkillsCard