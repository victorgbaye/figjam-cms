import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Sidebar from './components/compound/sidebar/Sidebar'
import Products from './pages/Products/Products'
import Subscribers from './pages/Subscribers/Subscribers';


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/subscribers" element={<Subscribers/>} />
        </Routes>
      </Router>
      {/* <Sidebar/> */}
      {/* <Products/> */}
    </>
  )
}

export default App
