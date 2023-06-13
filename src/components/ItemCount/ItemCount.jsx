import React from 'react'
import { useState } from 'react'

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <label htmlFor="Quantity" className="sr-only"> Cantidad </label>
                <div className="flex items-center gap-1">
                    <button
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={decrementar}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        id="Quantity"
                        value={contador}
                        className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    <button
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                        onClick={incrementar}
                    >
                        +
                    </button>
                </div>
            </div>
            <button className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded' onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}


export default ItemCount