import mlibrelogo from '../assets/logo.png';
import dstarplus from '../assets/disney-star-logo.png';
import Subheader from './Subheader';
const Header = () => {
  return (
    <div className="bg-yellow-300 py-3 px-12">
      <div className="flex justify-between">
        <div className="w-2/12">
          <img src={mlibrelogo} className="w-28 mx-auto" alt="logo mercado libre" />
        </div>
        <div className="w-6/12">
          <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-100 border-l-2 border border-gray-300 py-2 shadow-md" placeholder="Buscar productos, marcas y más..." />
            <button className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 border-l-2 "><svg aria-hidden="true" className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
          </div>
        </div>
        <div className="w-4/12 flex justify-end gap-3 items-center">
          <div className="flex flex-col items-center">
            <img src={dstarplus} className="remove-bg w-24" alt="logo disney star plus" />
            <p className='text-xs -mt-3'>Incluidos</p>
          </div>
          <div >
            <button className='text-white bg-gradient-to-r from-purple-900 to-purple-600 py-0 px-2 rounded-md'>
              Por <span className='font-bold'>$17.900</span> ¡Suscribete a <span className='font-bold'>nivel 6</span>
            </button>
          </div>
        </div>
      </div>
      <Subheader />
    </div>
  )
}

export default Header