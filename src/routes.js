import PaginaPadrao from 'components/PaginaPadrao'
import Home from 'components/pages/Home'
import Categoria from 'components/pages/Categoria'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}