import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase'
import { collection, getDocs, where, query } from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const productos = idCategoria ? query(collection(db, 'productos'), where('category', '==', idCategoria)) : collection(db, 'productos')
    getDocs(productos)
      .then(res => {
        const newProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(newProductos)
      })
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-4">
            <ItemList productos={productos} />
          </div>
        </div>
      </section>
    </>
  )
}

export default ItemListContainer