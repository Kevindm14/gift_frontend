import { Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import { Login } from './components/Login/Login.jsx'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx'
import { SignUp } from './components/SignUp/SignUp.jsx'

function RoutesApp () {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/' element={<App />} />
      <Route path='/dashboard' element={<PrivateRoute component={<Login />} />} />

      <Route path='*' element={<>Not Found</>} />
    </Routes>
  )
}

export default RoutesApp
