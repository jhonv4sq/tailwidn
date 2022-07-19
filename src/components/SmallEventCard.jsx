import React from 'react'

const SmallCardEvent = () => {
  return (
    <>
    <div className="gap-10   from-colorTourq bg-gradient-to-b bg-colorYellow justify-center flex items-center w-screen h-screen">

      <section className=" flex flex-col gap-[10px] font-extrabold font-sansita text-colorBlack bg-colorWhite rounded-[10px]   ">
    
    
    <div className="max-w-fit mb-2.5 hidden md:block sm:block  " >
    <img className="rounded-t-[10px] " src="https://hogueras.com/wp-content/uploads/2020/09/noche-de-san-juan-768x432.jpg.webp" alt=""/>
    </div>
    

    <div className="flex flex-col text-center gap-[40px] py-[20px]  ">
      <p className="text-[26px]">San Juan </p>
      <p className="text-[20px] text-colorPink">Jueves, 23 de Junio</p>
      <p className="font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
    </div>

    <button className=" tracking-[0.20em] h-fit py-4 px-[93px] font-librefranklin font-bold text-[24px] bg-colorGreen rounded-bl-[10px] rounded-br-[10px]  text-colorWhite text-2xl">
      APUNTATE
    </button>
  </section>

  </div>

    </>
  )
}

export default SmallCardEvent