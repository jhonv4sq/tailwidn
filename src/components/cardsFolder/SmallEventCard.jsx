import React from 'react'
import ButtonSmallCard from '../buttonsFolder/ButtonSmallCard'

const SmallCardEvent = () => {
  return (
    <>
<div class="gap-10 flex-col from-colorTourq bg-gradient-to-b  bg-colorYellow justify-center flex  max-w-full min-h-screen items-center ">


  <section class=" flex flex-col gap-[10px] font-extrabold font-sansita container w-auto       text-colorBlack bg-colorWhite rounded-[10px]   ">
    
 
    <div class=" mb-2.5    " >
      <img class="rounded-t-[10px] " src="https://hogueras.com/wp-content/uploads/2020/09/noche-de-san-juan-768x432.jpg.webp" alt=""/>
    </div>

    <div class="flex flex-col text-center gap-[40px] py-[20px]  ">
      <p class="text-[26px]">San Juan </p>
      <p class="text-[20px] text-colorPink">Jueves, 23 de Junio</p>
      <p class="font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
    </div>

   
    <ButtonSmallCard/>
  </section>
    
    
    
</div>

    </>
  )
}

export default SmallCardEvent