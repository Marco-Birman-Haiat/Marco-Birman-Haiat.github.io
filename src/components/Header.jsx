import React from 'react'
import { ImGithub, ImLinkedin, ImHome3 } from 'react-icons/im'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='bg-slate-700 h-fit py-5 px-[7%] lg:px-12 rounded-b-lg flex justify-between items-center'>
          <Link to='/'>
            <ImHome3 className='text-slate-300 text-3xl hover:scale-110 hover:brightness-110'/>
          </Link>
          <div className='flex gap-6'>
            <a href='https://github.com/Marco-Birman-Haiat' target='_blank'>
              <ImGithub className='text-slate-300 text-3xl hover:scale-110 hover:brightness-110'/>
            </a>
            <a href='https://www.linkedin.com/in/marco-birman-haiat/' target='_blank'>
              <ImLinkedin className='text-slate-300 text-3xl hover:scale-110 hover:brightness-110'/>
            </a>
          </div>
      </header>
    </>
  )
}

export default Header