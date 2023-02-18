import { useState } from 'react'
import { GoLocation } from 'react-icons/go';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import IOptionsHeader from '../interfaces/IOptionsHeader';
import CategoriesSubheader from './CategoriesSubheader';

const Subheader = () => {
  const options: IOptionsHeader[] = [
    { name: "Ofertas", link: "https://www.mercadolibre.com.co/ofertas" },
    { name: "Historial", link: "https://www.mercadolibre.com.co/gz/home/navigation" },
    { name: "Supermercado", link: "https://www.mercadolibre.com.co/ofertas/supermercado" },
    { name: "Moda", link: "https://www.mercadolibre.com.co/c/ropa-y-accesorios" },
    { name: "Vender", link: "https://www.mercadolibre.com.co/publicar" },
    { name: "Ayuda/PQR", link: "https://www.mercadolibre.com.co/ayuda" },
  ]
  const countries = [
    { name: "Argentina", flag: "https://www.sitographics.com/enciclog/banderas/america/image_2012/Argentina.gif" },
    { name: "Chile", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/200px-Flag_of_Chile.svg.png" },
    { name: "Colombia", flag: "https://www.flagsonline.it/uploads/2016-10-7/420-272/repubblica-di-colombia.jpg" },
    { name: "EEUU", flag: "https://i.pinimg.com/originals/ec/85/70/ec8570cb9447aad9e208faa059707933.gif" },
    { name: "Ecuador", flag: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandera_de_Ecuador.jpg" },
    { name: "España", flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_the_First_Spanish_Republic.svg/220px-Flag_of_the_First_Spanish_Republic.svg.png" },
    { name: "Mexico", flag: "https://caracoltv.brightspotcdn.com/dims4/default/fa251fd/2147483647/strip/true/crop/1097x731+92+0/resize/840x560!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F33%2Fe0%2Fa864bd7445ccaa093711a8c32d30%2Fbandera-oficial-mexico.png" },
    { name: "Peru", flag: "https://www.sitographics.com/enciclog/banderas/america/image_2012/Peru.gif" },
  ]
  const [modalCountries, setModalCountries] = useState<boolean>(false);


  return (
    <div className="flex text-xs pt-6">
      <div onClick={() => setModalCountries(prev => !prev)}        
        className="w-2/12 inline-flex gap-1 items-center hover:cursor-pointer">
        <GoLocation />
        <span className='inline-flex'>Selecciona tu ubicacion </span>
      </div>
      {modalCountries &&
        <div onMouseLeave={() => setModalCountries(false)}
          className='absolute bg-white w-5/12 mt-11 z-10'>
          <h4 className="ml-6 mt-4 text-lg font-semibold">Selecciona tu pais</h4>
          <hr />
          <div className='flex flex-wrap'>
            {countries.map((country, index) => (
              <div key={index} className="w-3/12">
                <div className="my-3">
                  <img src={country.flag} className="w-16 mx-auto rounded-md" alt="flag" />
                  <p className='text-center'>{country.name}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      }
      <CategoriesSubheader />
      <div className="w-5/12 flex gap-2 ml-3">
        {options.map((opt, index) => (
          <Link to={opt.link} key={index} target="_blank"
            className="text-stone-500 hover:text-neutral-700">
            {opt.name}
          </Link>
        ))}
      </div>
      <div className="w-4/12 flex justify-end gap-4">
        <Link to={"https://www.mercadolibre.com.co/registration?confirmation_url=https%3A%2F%2Fwww.mercadolibre.com.co%2F"} target="_blank" className="text-stone-700 hover:text-black">
          Crea tu cuenta
        </Link>
        <Link to={"https://www.mercadolibre.com/jms/mco/lgz/login?platform_id=ML&go=https%3A%2F%2Fwww.mercadolibre.com.co%2F&loginType=explicit#nav-header"} target="_blank" className="text-stone-700 hover:text-black">
          Ingresa
        </Link>
        <Link to={"https://myaccount.mercadolibre.com.co/purchases/list#nav-header"} target="_blank" className="text-stone-700 hover:text-black">
          Tus compras
        </Link>
        <FaCartPlus />
      </div>
    </div>
  )
}

export default Subheader