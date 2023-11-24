import { Link } from "react-router-dom";

import iconoObservar from '/iconoObservar.svg';


const Cliente = ({ datos }) => {
    const { id, title, description } = datos;

    return (
        <tr key={id} className="border-2 text-center bg-transparent">
            <td className=''>
                <p className="text-2xl text-gray-800">{title}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-800 text-2xl">{description}</p>
            </td>

            <td className="p-6 flex gap-3 flex justify-center items-center">
                <div className="flex justify-center items-center gap-3">
                    <Link to={`detalle/${id}/denuncia`} className="mt-2">
                        <img
                            src={iconoObservar}
                            alt='iconoObservar'
                        />
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default Cliente;