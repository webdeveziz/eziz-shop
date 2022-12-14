import Products from './components/products/Products'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/aboutUs/AboutUs'
import Contacts from './components/contacts/Contacts'
import Product from './components/product/Product'
import Bookmark from './components/bookmark/Bookmark'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import Carts from './components/cart/Carts'
import NotFound from './components/notFaund/NotFound'
import AppRoute from './AppRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppRoute />}>
        <Route path="/" element={<Products />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="us" element={<AboutUs />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="cart" element={<Carts />} />
        <Route path="bookmark" element={<Bookmark />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
