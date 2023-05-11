import { Routes, Route, Link } from 'react-router-dom';
import Manager from './Manager/index'
import Nav from './Nav/index.jsx'
// import { Nav } from './Nav/index.jsx'

export const App = () => {
    return (
        <>
           
            <Nav/>
            <Routes>
                <Route path='/' element={<h1>TESTE</h1>} />
                <Route path='/manager' element={<Manager/>} />
                <Route path='/home' element={<h1>HOME</h1>} />
                <Route path='/contact' element={<h1>CONTATO</h1>} />
                <Route path='/info' element={<h1>INFORMAÇÕES</h1>} />
            </Routes>
        </>
    );
}
export default App;