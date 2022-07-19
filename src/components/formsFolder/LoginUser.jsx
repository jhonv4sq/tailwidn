import React from 'react'

const LoginUser = () => {
    return ( 
    <>

        <section className='w-full flex justify-center px-3'>

            <div className='font-inter w-full lg:w-4/6  bg-colorWhite flex flex-row rounded-[28px]'>

                <div className='w-full bg-colorBlack rounded-l-[28px] hidden md:block'>

                </div>
                {/* contenedor */}
                <div className='w-full flex flex-col gap-[22px] pb-[80px]'>
                    {/* letra de login de usuario */}
                    <div className='flex flex-col items-center pt-[60px] pb-[30px] gap-5 '>
                        <p className='text-[32px]  font-bold'>
                            Login de Usuario
                        </p>
                        <div className="border-b-2 border-[#959393] w-4/6"></div>
                    </div>
                    {/* formulario */}
                    <form className='flex flex-col gap-[22px] items-center'>
                        <div className='flex flex-col items-center gap-[22px] w-3/4 '>
                            <span className='w-full'>
                                <p className='text-left font-bold'>Correo Electronico:</p>
                            </span>
                            <input className="w-full rounded-[10px] px-[13px] py-[10px] text-lg font-normal text-colorWhite bg-colorTourq focus:outline-0" type="text" />
                        </div>
                        
                        <div className='flex flex-col items-center gap-[22px] w-3/4 '>
                            <span className='w-full'>
                                <p className='text-left font-bold '>Contraseña:</p>
                            </span>
                            <input className="w-full rounded-[10px] px-[13px] py-[10px] text-lg font-normal bg-colorTourq focus:outline-0" type='password' />
                            
                        </div>

                        <div className='w-3/4'>
                            <a href='#' className='underline underline-offset-4 text-xs	text-left'>
                                Olvide mi contraseña:
                            </a>
                        </div>

                        {/* botones */}
                        <div className="flex justify-center items-center mt-2 mb-7 gap-[25px] px-[10px]  w-3/4 ">

                            <button type='submit' className="px-1 lg:px-5 py-[10px] text-colorBlack text-sm md:text-lg font-inter font-medium border-2 rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite">
                                Iniciar sesión
                            </button>

                            <button type='submit' className="px-1 lg:px-5 py-[10px] text-colorBlack text-sm md:text-lg font-inter font-medium  rounded-lg border-colorTourq hover:bg-colorGreen hover:text-colorWhite">
                                Registrarse
                            </button>
                            
                        </div>
                    </form>

                </div>
            </div>
        </section>
    
    </>

) 
}

export default LoginUser
