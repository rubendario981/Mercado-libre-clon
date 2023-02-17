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
  
  return (
    <div className="flex text-xs pt-6">
      <div className="w-2/12 inline-flex gap-1 items-center">
        <GoLocation />
        <span className='inline-flex'>Selecciona tu ubicacion </span>
      </div>
      {/* <p className="text-neutral-600 hover:text-neutral-700">Categorias</p> */}
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