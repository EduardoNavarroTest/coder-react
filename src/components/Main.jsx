import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound"
import Cart from "./Cart"


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />

                <Route path="/category/:id" element={<ItemListContainer />} />

                <Route path="/item/:id" element={<ItemDetailContainer />} />
                
                <Route path="/cart" element={<Cart />} />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </main>
    )
}

export default Main;