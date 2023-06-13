import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        const queryProducto = doc(db, 'productos', idItem)
        getDoc(queryProducto)
            .then(res => {
                const data = res.data()
                const newProducto = {id: res.id, ...data}
                setProducto(newProducto)
            })
            .catch(error => console.log(error))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer