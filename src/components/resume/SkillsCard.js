import React from 'react'

const SkillsCard = ({ title, img }) => {
  return (
    <div>
        <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-10 shadow-shadowOne relative">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <img src={img} width='64'
                        height='64' alt='/'/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard