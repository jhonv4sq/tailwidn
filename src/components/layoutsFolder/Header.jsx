import React from 'react'
import image from '../image/Logo.svg'
import fondo from '../image/PorkyPatternB.png'


const Header = () => {
  return (
    <header className='bg-colorBlack' >
      <div className='font-sansita w-full flex flex-col text-colorWhite bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${fondo})` }}>
        
        <div className='flex flex-row justify-end text-xs gap-1 mr-1'>
          <button className='p-1 bg-colorPink rounded-md '>
            registrarse 
          </button>
          |
          <button>
            Iniciar sesion
          </button>
        </div>

        <div className='flex flex-row w-full'>  

          <div className='w-full flex items-center justify-center'>
            <a href='#' className='font-bold text-xs'>
              Que ofrecemos
            </a>
          </div> 
          
          <div className='w-full flex justify-center h-[80px] items-center'>
            <div className='bg-colorPink rounded-full h-[85px] w-[85px] md:w-[300px] md:h-[300px] flex items-center justify-center'>
              <div className='w-[80px] h-[80px] md:w-[300px]  md:h-[300px]  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          </div>

          <div className='w-full flex items-center justify-center'>
            <a href='#' className='font-bold text-xs'>
              Quienes somos
            </a>
          </div>

        </div>

        <div className='flex flex-row justify-center text-xs gap-1'> 
          <p className='font-bold'>Contacto</p>|
          <p className='font-bold'>Eventos</p>
        </div>
      </div>
    </header>
  )
}

export default Header

      // {/* <header class=" h-screen  ">
      //   <section class="bg-colorBlack p-2.5 space-y-2.5 | font-sansita font-extrabold text-2xl  text-colorWhite | flex flex-col   ">
      
      //     <div class ="space-x-2.5 px-[60px] p-[10px] place-self-end items-center flex">
      //       <button class="bg-colorPink font-extrabold rounded-md p-2.5 ">
      //         <p>Register</p>
      //       </button>
      //         <p>|</p>
      //         <p>Login</p>
      //     </div>
      
      //     <section class =" px-32 border-colorGreen font-bold flex place-content-between items-center "> 
      //       <div class=" ">
      //         <p class="font-extrabold ">
      //           Que Ofrecemos</p>
      //       </div>
      //       <div>
      //         <img src="https://i.postimg.cc/TYHTWZzr/bopart-logo.png" alt="" />
      //       </div>
      //       <div class=" ">
      //         <p class="font-extrabold ">
      //           Quienes Somos</p>
      //       </div>
      //     </section>
      
      //     <div class ="p-2.5 space-x-2.5 flex self-center   ">
      //       <p>
      //         Contacto</p>
      //       <p>
      //         |</p>
      //       <p>
      //         Eventos</p> 
      //     </div>
      
      //   </section>
      // </header> */}