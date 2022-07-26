import React from 'react'


const Footer = () => {
  return (
    <>

  {/* Main Container */}
  <div className="md:flex md:flex-row gap-5 flex flex-col max-w-full justify-between space-x-9 bg-colorBlack p-9 | text-colorWhite font-sansita font-bold text-base  ">
   {/* Contact Info */}
   <section className="flex flex-col md:flex md:flex-row gap-5 space-x-9 ">

    <div className="space-y-5 ">
      <section className="text-xl ">
        <p>
          Bopart S.L 
        </p>
      </section>

      <section className=" ">
        <p>
          Carrer de Barnola, 5B · 08030 Barcelona · (+34) 934 198 864 </p>
        <p>
          Príncipe de Vergara 112  · 28002 Madrid · (+34) 910 205 328 </p>
      </section>

      <section>
        <p>
          Copyright ℗ 2022. Bopart All rights reserved. </p>
        <p>
          © 2022 Bopart  · BopartContacto@gmail.com  </p>
      </section>
    </div>

    {/* SocialMedia */} 
    <div className="  self-center fit flex space-x-6">
      <section className="bg-colorGreen self-center h-fit  ">
        <svg className="bg-colorYellow" xmlns="http://www.w3.org/2000/svg" width="54px" height="" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </section>

      <section className=" bg-colorGreen place-self-center   ">
       <svg className="bg-colorPink " xmlns="http://www.w3.org/2000/svg" width="54px" height="" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
      </section>
    </div>
  </section>

    {/* Collaborators */} 
    <div className="h-fit space-x-1.5 flex  border-colorPink self-center    ">
      <section className="">
        <img src="https://i.postimg.cc/7LsBnKHK/2collaborator.png" alt=""/>
      </section>
      <section className="">
        <img src="https://i.postimg.cc/fLV82YkD/1collaborator.png" alt=""/>
      </section>
      <section className="">
        <img src="https://i.postimg.cc/KzCJd4gL/3collaborator.png" alt=""/>
      </section>
    </div>

  </div> {/* Closing Main Container Tag */}

</>
  )
}

export default Footer
