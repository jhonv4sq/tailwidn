import React from 'react'

export const GuestHeaderButton = () => {
  return (
    <>
    <div class=" self-center items-center space-x-3 | text-colorWhite font-sansita text-2xl font-extrabold | flex">
        <button class="p-2.5 | bg-colorPink | rounded-md | place-self-end ">
        Registrar
        </button>
        <p>| </p>
        <p>Iniciar Sesión </p>
  </div>
    </>
  )
}
export const AuthzHeaderButton = () => {
    return (
      <>
      <div class=" self-center items-center space-x-3 | text-colorWhite font-sansita text-2xl font-extrabold | flex">
          <button class="p-2.5 | bg-colorPink | rounded-md | place-self-end ">
          Perfil
          </button>
          <p>| </p>
          <p>Cerrar Sesión </p>
    </div>
      </>
    )
}
export const AdminHeaderButton = () => {
    return (
      <>
      <div class=" self-center items-center space-x-3 | text-colorWhite font-sansita text-2xl font-extrabold | flex">
          <button class="p-2.5 | bg-colorPink | rounded-md | place-self-end ">
          Panel Admin
          </button>
          <p>| </p>
          <p>Cerrar Sesión </p>
    </div>
      </>
    )
}


