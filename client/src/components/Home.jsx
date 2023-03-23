import React from 'react'

function Home () {
  return (
    <section
      id='hero'
      className='w-full md:w-[900px]  min-h-screen -z-10 gap-3 grid items-center mx-auto'
    >
      <div className='flex flex-col justify-center align-middle'>
        <div>
          <h1 className='text-md text-[#889FAF] font-bold tracking-widest'>
            Strongbox
          </h1>
        </div>
        <div>
          <h2 className='text-cyan-50 text-5xl'>
            Don't have a place to store your information?
          </h2>
        </div>
        <div>
          <h3 className='text-[#585F6F] text-5xl'>
            Keep your information safe and simple
          </h3>
        </div>
        <div>
          <p className='text-[#585F6F] text-lg'>
            A simple way to safely store your information, accessible,
            protected, and private, wherever you need it
          </p>
        </div>
      </div>
    </section>
  )
}

export default Home
