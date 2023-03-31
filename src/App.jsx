import { ImGithub, ImLinkedin } from 'react-icons/im'
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import './App.css'

import programmerAvatar from './programmer.png';


function App() {
  return (
    <>
      <header className='bg-slate-700 h-16 rounded-b-lg flex justify-end gap-10 items-center pr-16'>
        <ImGithub className='text-slate-300 text-2xl'/>
        <ImLinkedin className='text-slate-300 text-2xl'/>
      </header>
      <section className='pt-5'>
        <div className='mt-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  w-fit p-6 mx-auto rounded-full'>
            <img src={ programmerAvatar } className='w-40 mx-auto' />
          </div>
        <div className='mt-10 w-fit mx-auto'>
          <div className='w-fit h-fit bg-white p-10 rounded-lg shadow-2xl'>
            <h1 class='text-center text-4xl font-mono font-semibold text-gray-800'>Estudante de Desenvolvimento Web</h1>
            <p className='mt-3 text-center text-xl font-normal text-gray-800'>Apaixonado por tecnologia, desafios e aprendizado constante</p>
          </div>
          
        </div>
        <section className='mt-10 py-10'>
          <div className='max-w-3xl mx-auto flex justify-center gap-x-20 gap-y-11 flex-wrap'>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start hover:blur-sm'>
              <div class='bg-green-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <BsPerson className='text-purple-900 text-6xl'/>
                <p className=''>Sobre mim</p>
              </div>
            </div>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start'>
              <div class='bg-red-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <BsCodeSlash className='text-purple-900 text-6xl'/>
                <p className=''>Projetos</p>
              </div>
            </div>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start'>
              <div class='bg-purple-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <AiOutlineMail className='text-purple-900 text-6xl'/>
                <p className=''>Contato</p>
              </div>
            </div>
            <div className='w-60 h-40 bg-slate-50 border-gray-300 border-y border-r rounded-md flex justify-start'>
              <div class='bg-blue-400 w-2 rounded-l-lg'></div>
              <div className='flex flex-col justify-center items-center flex-grow'>
                <BsPerson className='text-purple-900 text-6xl'/>
                <p className=''>Sobre mim</p>
              </div>
            </div>            
          </div>
        </section>
      </section>
      {/* <nav>
          <a href="#quem_sou">Quem sou eu</a> |
          <a href="#habilidades">Habilidades</a> |
          <a href="#blog">Blog</a>
      </nav>
      <h2 id="quem_sou">Quem sou eu?</h2>
      <h3 class="estilo_do_marco">Marco Birman Haiat</h3>
      <img src="foto_linkedin.jpeg" alt="Foto de Marco, dono do portfólio" width="200px" />
      <p class="estilo_do_marco">Meu nome é Marco, tenho 29 anos e sou do <tag class="destaques_de_texto">Brasil</tag>. Moro em <tag class="destaques_de_texto">São Paulo Capital</tag>.Sou formado em <strong>Engenharia de Produção</strong>, tenho experência em <strong> Consultoria estratégica</strong> e em <strong>Fintech</strong>.Atualmente estou estudando desenvolvimento web para realizar uma mudança de carreira para o mundo da tecnologia!!!</p>
      <h2 id="habilidades">Habilidades</h2>
      <ul>
          <li>Estratégia Empresarial</li>
          <li>Análise de Dados</li>
          <li>Desenvolvimento Web (aprendendo...)</li>
      </ul>
      <p4 id="blog">Blog de Interesse:</p4>
          <a href="https://www.mckinsey.com/br/our-insights/blog-made-in-brazil" target="_blank">Blog Mckinsey Brasil</a> */}
    </>
  )
}

export default App
