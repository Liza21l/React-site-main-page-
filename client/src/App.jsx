import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./Components/Header/header"
import Main from "./Components/Main/Main"
import Products from "./Components/Products/Products"
const App = () => {
    return (
    <main>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
        </BrowserRouter>
    </main>
    )
}

export default App