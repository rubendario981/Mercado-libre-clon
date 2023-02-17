import React, { useState } from 'react'
import MenuTech from './MenuTech'

const CategoriesSubheader = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [showTechMenu, setShowTechMenu] = useState<boolean>(false)

  const listCategories = [
    { name: "Vehiculos" },
    { name: "Supermercado" },
    { name: "Tecnologia" },
    { name: "Electrodomesticos" },
    { name: "Hogar y muebles" },
    { name: "Deporte y fitnes" },
    { name: "Belleza y Cuidado personal" },
    { name: "Acessorios para vehiculos" },
    { name: "Herramientas" },
    { name: "Construccion" },
    { name: "Inmuebles" },
    { name: "Moda" },
  ]

  const showMenuTech = (option: string) => option === "Tecnologia" && setShowTechMenu(true)
  
  const hideMenuTech = (option: string) => option === "Tecnologia" && setShowTechMenu(false)
  
  return (
    <div className='flex '>
      <p onMouseOver={() => setShowOptions(prev => !prev)}
        onMouseLeave={() => setShowOptions(prev => !prev)}
        className="text-neutral-600 pb-4 hover:text-neutral-700 hover:cursor-pointer">Categorias</p>
      <div className="absolute">
        {showOptions &&
          <div onMouseOver={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
            className={showOptions ? "fixed mt-6 -ml-12 bg-white shadow-xl border border-gray-300 rounded-md w-2/12 z-10 arrow-top" : "hidden"}>
            <ul className="bg-gray-800 py-3 text-gray-500 list-none list-inside">
              {listCategories.map((cat, index) => (
                <li key={index} 
                onMouseOver={()=>showMenuTech(cat.name)}
                onMouseLeave={()=>hideMenuTech(cat.name)}
                className='text-white font-bold py-3 pl-8 my-1 hover:bg-blue-600 hover:cursor-pointer flex justify-between'>{cat.name}
                  <span className='mr-6'>{cat.name === "Tecnologia" && ">"}</span>
                </li>
              ))}
            </ul>
          </div>
        }
        <div className="z-[100] menuTech">
        {showTechMenu && <MenuTech/>}

        </div>

      </div>
    </div>
  )
}

export default CategoriesSubheader