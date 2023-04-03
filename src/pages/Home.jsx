import React from 'react'
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import programmerAvatar from '../programmer.png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className='pt-5'>
        <div className='mt-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  w-fit p-6 mx-auto rounded-full'>
            <img src={ programmerAvatar } className='w-40 mx-auto' />
          </div>
        <div className='mt-10 w-fit mx-auto'>
          <div className='w-fit h-fit bg-white p-10 rounded-lg shadow-2xl'>
            <h1 className='text-center text-4xl font-mono font-semibold text-gray-800'>Estudante de Desenvolvimento Web</h1>
            <p className='mt-3 text-center text-xl font-normal text-gray-800'>Apaixonado por tecnologia, desafios e aprendizado constante</p>
          </div>
          
        </div>
        <section className='mt-10 py-10'>
          <div className='max-w-3xl mx-auto flex justify-center gap-x-20 gap-y-11 flex-wrap'>
            <Link to='/about'>
              <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start shadow-lg transform hover:-translate-y-0.5 hover:scale-105 transition duration-200 hover:brightness-105'>
                <div className='bg-green-400 w-2 rounded-l-lg'></div>
                <div className='flex flex-col justify-center items-center flex-grow'>
                  <BsPerson className='text-purple-900 text-6xl'/>
                  <p className=''>Sobre mim</p>
                </div>
              </div>
            </Link>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start shadow-lg transform hover:-translate-y-0.5 hover:scale-95 transition duration-200  hover:brightness-105'>
              <div className='bg-red-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <BsCodeSlash className='text-purple-900 text-6xl'/>
                <p className=''>Projetos</p>
              </div>
            </div>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start shadow-lg transform hover:-translate-y-0.5 hover:scale-95 transition duration-200  hover:brightness-105'>
              <div className='bg-purple-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <AiOutlineMail className='text-purple-900 text-6xl'/>
                <p className=''>Contato</p>
              </div>
            </div>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start shadow-lg transform hover:-translate-y-0.5 hover:scale-105 transition duration-200  hover:brightness-105'>
              <div className='bg-blue-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <BsPerson className='text-purple-900 text-6xl'/>
                <p className=''>Sobre mim</p>
              </div>
            </div>            
          </div>
        </section>
      </section>
  )
}
