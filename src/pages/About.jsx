import React from 'react'
import Shape1 from '../components/shapes/Shape1';

function About() {
  return (
    <>
      <div className='animate-gradient-xy mt-20 h-fit bg-gradient-to-bl from-slate-600 via-green-700 to-teal-800 pt-20
      flex justify-around px-10 pb-20 flex-col gap-10 xl:flex-row xl:gap-0'
      >
        <Shape1 />
      </div>
      <section>Escritos
        <div>Container
          <div>Elemento</div>
        </div>
      </section>
    </>
  )
}

export default About;
