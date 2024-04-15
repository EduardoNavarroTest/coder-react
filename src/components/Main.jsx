import Clothes from "../pages/Clothes"
import Shoes from "../pages/Shoes"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return (
        <main>
            {/* <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" test="Hola Mundo" /> */}

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/clothes' element={<Clothes />} />
                <Route path='/category/electronics' element={<ItemListContainer />} />
                <Route path='/category/shoes' element={<Shoes />} />
                <Route path='/category/miscellaneous' element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemDetailContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
        </main>
    )
}

export default Main