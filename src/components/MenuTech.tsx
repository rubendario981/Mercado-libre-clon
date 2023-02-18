
const MenuTech = () => {

  return (
    <div className="relative ml-56 w-full z-10">
      <div className='bg-white flex flex-col my-6 py-10 px-8'>
        <h3 className="text-4xl mb-2">Tecnologia</h3>
        <hr className='mb-6' />
        <div className="flex justify-between">
          <div className="w-3/12">
            <h4 className="text-gray-900 font-bold">Celulares y telefonos</h4>
            <p className="text-gray-600">Celulares y Smartphones</p>
            <p className="text-gray-600">Accesorios para Celulares</p>
          </div>
          <div className="w-3/12">
            <h4 className="text-gray-900 font-bold">Camaras y accesorios</h4>
            <p className="text-gray-600">Camaraas</p>
            <p className="text-gray-600">Accesorios para Camaras</p>
          </div>
          <div className="w-3/12">
            <h4 className="text-gray-900 font-bold">Consolas y videojuegos</h4>
            <p className="text-gray-600">Para playstation</p>
            <p className="text-gray-600">Para Xbox</p>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="w-3/12">
            <h4 className="text-gray-900 font-bold">Computacion</h4>
            <p className="text-gray-600">Tablets</p>
            <p className="text-gray-600">Pantallas</p>
            <p className="text-gray-600">Computadores</p>
            <p className="text-gray-600">Accesorios para portatiles</p>
          </div>
          <div className="w-3/12">
            <h4 className="text-gray-900 font-bold">Electronica, Audio y Video</h4>
            <p className="text-gray-600">Equipos de DJ y Accesorios</p>
            <p className="text-gray-600">Drones y Accesorios</p>
            <p className="text-gray-600">Audio</p>
          </div>
          <div className="w-3/12">
            <h4 className="text-gray-900 font-bold">Televisores</h4>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuTech