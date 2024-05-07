import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import NotFound from "./NotFound"
import Clothes from "../pages/Clothes"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />

                <Route path="/category/:id" element={<ItemListContainer />} />

                <Route path="/item/:id" element={<ItemDetailContainer />} />

                <Route path="/clothes" element={<Clothes />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

        </main>
    )
}

export default Main;