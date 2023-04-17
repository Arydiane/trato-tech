import PaginaPadrao from 'components/PaginaPadrao'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<div>Home</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}