import React from 'react'

function Shape1() {
  return (
    <>
      <div className='flex justify-center gap-5'>
        <div className='w-36 h-20 mt-7 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-800
          hover:scale-100 hover:brightness-110 rounded-tr-3xl rounded-b-[50px] transform skew-x-12 skew-y-2 rotate-45 hover:translate-y-2'>
        </div>
        <div>
          <p className='text-white font-normal max-w-lg sm:text-lg lg:text-xl xl:max-w-xs'>
            Greetings! My name is Marco, and I'm a driven technology enthusiast on a mission to advance my skills in the world of full-stack development.
          </p>
          <p className='mt-3 text-white font-normal max-w-lg sm:text-lg lg:text-xl xl:max-w-xs'>
            With a degree in Production Engineering and experience in both strategic consulting and fintech, I've honed my analytical and problem-solving
            abilities, making me well-suited to excel in the fast-paced and ever-evolving field of technology.
          </p>
        </div>
      </div>
       <div className='flex gap-5 justify-center'>
          <div className='w-36 h-20 bg-blue-800 rounded-br-3xl rounded-t-[50px] transform -rotate-90'></div>
          <div>
          <p className='text-white font-normal max-w-lg sm:text-lg lg:text-xl xl:max-w-xs'>
            Located in São Paulo, Brazil, I'm eager to find my place in the tech industry and have set my sights on pursuing a career in backend development.
          </p>
          <p className='mt-3 text-white font-normal max-w-lg sm:text-lg lg:text-xl xl:max-w-xs'>
            I'm currently enrolled in a full stack development course, where I'm expanding my skill set and gaining exposure to
            a wealth of new and exciting technologies.
          </p>
        </div>
       </div> 
      <div className='flex gap-10 justify-center'>
        <div className="w-24 bg-opacity-70 h-36 bg-slate-200 mt-11 rounded-[50%/60%_60%_40%_40%] drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)]"></div>
        <div>
          <p className='text-white font-normal max-w-lg sm:text-lg lg:text-xl xl:max-w-xs'>
            In addition to my passion for technology, I love staying active by participating in sports and spending time with friends.
          </p>
          <p className='mt-3 text-white font-normal max-w-lg sm:text-lg lg:text-xl xl:max-w-xs'>
            I'm excited about the endless opportunities for growth and development in the tech industry and am eager to find a
            rolewhere I can make a meaningful impact while continuing to learn and evolve my skill set.
          </p>
        </div>
      </div>
    </>

  )
}

export default Shape1