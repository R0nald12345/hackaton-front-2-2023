const Cliente = ({ cliente }) => {
    const { nombre, empresa, email, telefono, id } = cliente;
  
    return (
      <tr key={id} className="border-b text-center">
          <td className='p-6 space-y-2' >
              <p className="text-2xl text-gray-800">{nombre}</p>
              <p>{empresa}</p>
          </td>
  
          <td className="p-6">
              <p className="text-gray-800">Email: <span>{email}</span></p>
              <p className="text-gray-800">Teléfono: <span>{telefono}</span></p>
          </td>
  
          <td className="p-6 flex gap-3 flex justify-center items-center">
              <button className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">Mas Detalles</button>
              <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">Eliminar</button>
          </td>
      </tr>
    );
  };
  
  export default Cliente;