import React from 'react'

const TallEventCard = () => {
  return (
<>
<div class="gap-10 flex-col from-colorTourq bg-gradient-to-b  bg-colorYellow justify-center flex items-center max-w-full min-h-screen ">

{/* <!-- COMPONENT --> */}
<div class="bg-colorWhite flex flex-col container text-center rounded-[10px] gap-[10px] pb-5 ">

  <div class="flex flex-col rounded-t-[10px] h-[300px] bg-center bg-no-repeat bg-cover w-full" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")` }}>
  </div>

  <section class="flex flex-col gap-[60px] font-extrabold font-sansita">
    <div class="flex flex-col mx-14 gap-[10px]">
      <p class=" text-[40px]">San Juan</p>
      <p class="text-2xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus consequat ornare porttitor aliquet semper. Habitasse lorem netus est id elit ut. Nulla adipiscing maecenas hac vulputate lectus elementum. Molestie turpis blandit fermentum leo diam praesent tellus donec.</p>
      <p class="text-2xl   text-colorPink">Jueves, 23 de Junio</p>
      <p class="text-xl font-bold">CARRER DE BARNOLA, 08030 BARCELONA.</p>
    </div>

    <button class="place-content-center tracking-[0.20em] flex center mx-[155px]  py-[10px] px-[10px]  font-librefranklin font-bold text-[24px] bg-colorGreen rounded-bl-[10px] rounded-br-[10px]  text-colorWhite">
      APUNTATE
    </button>
    
  </section>
</div>
    {/* <!-- END --> */}

</div>
</>
  )
}

export default TallEventCard